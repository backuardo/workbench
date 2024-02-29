import { NextPage } from "next";

import { Section } from "@/components/layout/section";
import { ContactForm } from "@/components/ui/contact-form";
import { P } from "@/components/ui/typography";

export const metadata = {
	title: "CONTACT",
	description: "CONTACT",
};

const Contact: NextPage = async () => {
	return (
		<Section.Container>
			<Section.Heading title="Contact" />
			<Section.Content>
				<ContactForm />
			</Section.Content>
		</Section.Container>
	);
};

export default Contact;
