import { NextPage } from "next";
import { Flex, Heading, Separator, Text } from "@radix-ui/themes";

import { Link } from "@/components/ui/link";
import { Section } from "@/components/ui/section";

export const metadata = {
	title: "About",
	description: "About me",
};

const About: NextPage = async () => {
	return (
		<Section.Container>
			<Section.Heading title="About" />
			<Section.Content>
				<Text size="3" weight="light" className="text-grayA-11">
					I'm a seasoned full-stack engineer specializing in building products
					from concept to launch. Right now I'm working on{" "}
					<Link href="https://cedar.build" className="font-bold">
						Cedar
					</Link>
					, the definitive platform for commercial development.
				</Text>
				<Text size="3" weight="light" className="text-grayA-11">
					I was an early engineer at{" "}
					<Link href="https://cameo.com" className="font-bold">
						Cameo
					</Link>
					, joining the company in 2017 and leaving in 2023. During my time
					there, I worked across the stack and helped scale the platform to
					millions of users. During my last year, I led technology for the
					company's crypto efforts.
				</Text>
				<Text size="3" weight="light" className="text-grayA-11">
					I started programming while serving as an infantry squad leader in the{" "}
					<Link href="https://marines.com/" className="font-bold">
						US&nbsp;Marines
					</Link>
					, and studied computer science at Dartmouth College after leaving the
					service.
				</Text>
			</Section.Content>
		</Section.Container>
	);
};

export default About;
