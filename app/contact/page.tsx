import { NextPage } from "next";

import { Section } from "@/components/layout/section";
import { P } from "@/components/ui/typography";
import { ContactForm } from "@/components/ui/contact-form";
import { Link } from "@/components/ui/link";

export const metadata = {
	title: "CONTACT",
	description: "CONTACT",
};

const Contact: NextPage = async () => {
	return (
		<Section.Container>
			<Section.Heading title="Contact" />
			<Section.Content>
				<P>
					Want to connect? Reach out and I&apos;ll get back to you. You can also
					contact me directly at{" "}
					<Link href="mailto:ben@beneisner.io">ben@beneisner.io</Link>.
				</P>
				<ContactForm />
			</Section.Content>
		</Section.Container>
	);
};

export default Contact;
