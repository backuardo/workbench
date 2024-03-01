import sendgrid from "@sendgrid/mail";

import { contactSchema } from "@/lib/contact-schema";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY ?? "");

const sanitizeString = (str: string) => {
	const map = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		'"': "&quot;",
		"'": "&#039;",
	};
	return str.replace(/[&<>"']/g, (m) =>
		Object.keys(map).includes(m) ? map[m as keyof typeof map] : m
	);
};

export const POST = async (req: Request) => {
	const { email, name, message } = await req.json();

	try {
		await contactSchema.validate({ email, name, message });
	} catch (error) {
		return Response.json({ status: 400, error });
	}

	try {
		await sendgrid.send({
			to: "ben@beneisner.io",
			from: "ben@beneisner.io",
			subject: `[FROM BENEISNER.IO] - ${name}`,
			text: `
        Name: ${sanitizeString(name)}\n
        Email: ${sanitizeString(email)}\n
        Message: ${sanitizeString(message)}\n
      `,
		});
	} catch (error) {
		return Response.json({ error: (error as Error)?.message, status: 500 });
	}

	return Response.json({ message: "Email sent", status: 200 });
};
