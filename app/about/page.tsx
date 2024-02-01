import { NextPage } from "next";
import { Flex, Heading, Text } from "@radix-ui/themes";

import { getPostData } from "@/lib/posts";

const About: NextPage = async () => {
	return (
		<Flex gap="4" direction="column" my="4">
			<Flex direction="column" gap="1" className="md:max-w-md">
				<Heading size="6" className="uppercase">
					About
				</Heading>
				<Text size="2" weight="light">
					Hi, I'm Ben (also known as Backuardo).
				</Text>
			</Flex>
		</Flex>
	);
};

export default About;
