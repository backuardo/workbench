import { NextPage } from "next";
import { Flex, Heading, Separator, Text } from "@radix-ui/themes";

import { ExternalLink } from "@/components/ui/external-link";

export const metadata = {
	title: "About",
	description: "About me",
};

const About: NextPage = async () => {
	return (
		<Flex gap="4" direction="column" my="4">
			<Flex direction="column" gap="3">
				<Heading size="6" className="uppercase">
					About
				</Heading>
				<Separator size="4" />
				<Flex direction="column" gap="4">
					<Text size="3" weight="light">
						I'm a seasoned full-stack engineer specializing in building products
						from concept to launch. Right now I'm working on{" "}
						<ExternalLink href="https://cedar.build" className="font-bold">
							Cedar
						</ExternalLink>
						, the definitive platform for commercial development.
					</Text>
					<Text size="3" weight="light">
						I was an early engineer at{" "}
						<ExternalLink href="https://cameo.com" className="font-bold">
							Cameo
						</ExternalLink>
						, joining the company in 2017 and leaving in 2023. During my time
						there, I worked across the stack and helped scale the platform to
						millions of users. During my last year, I led technology for the
						company's crypto efforts.
					</Text>
					<Text size="3" weight="light">
						I started programming while serving as an infantry squad leader in
						the{" "}
						<ExternalLink href="https://marines.com/" className="font-bold">
							US&nbsp;Marines
						</ExternalLink>
						, and studied computer science at Dartmouth College after leaving
						the service.
					</Text>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default About;
