import { NextPage } from "next";
import { Flex, Heading, Text } from "@radix-ui/themes";

import { ExternalLink } from "@/components/ui/external-link";

const About: NextPage = async () => {
	return (
		<Flex gap="4" direction="column" my="4">
			<Flex direction="column" gap="1">
				<Heading size="6" className="uppercase">
					About
				</Heading>
				<Flex direction="column" gap="4">
					<Text weight="light">
						I'm a seasoned full-stack engineer specializing in building products
						from concept to launch. Right now I'm working on{" "}
						<ExternalLink href="https://www.cedar.build" className="font-bold">
							Cedar
						</ExternalLink>
						, the definitive platform for commercial development.
					</Text>
					<Text weight="light">
						I was an early engineer at{" "}
						<ExternalLink href="https://www.cameo.com" className="font-bold">
							Cameo
						</ExternalLink>
						, joining the company in 2017 and leaving in 2023. During my time
						there, I worked across the stack and helped scale the platform to
						millions of users. During my last year, I led technology for the
						company's crypto efforts.
					</Text>
					<Text weight="light">
						I started programming while serving as an infantry squad leader in
						the{" "}
						<ExternalLink href="https://www.marines.com" className="font-bold">
							US Marines
						</ExternalLink>
						, and studied computer science at{" "}
						<ExternalLink
							href="https://www.dartmouth.edu"
							className="font-bold"
						>
							Dartmouth College
						</ExternalLink>{" "}
						after leaving the service.
					</Text>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default About;
