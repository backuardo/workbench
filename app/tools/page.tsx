import { NextPage } from "next";
import { Flex, Heading, Separator, Text } from "@radix-ui/themes";

export const metadata = {
	title: "Tools",
	description: "What I use",
};

const Tools: NextPage = async () => {
	return (
		<Flex gap="4" direction="column" my="4">
			<Flex direction="column" gap="3">
				<Heading size="6" className="uppercase">
					Tools
				</Heading>
				<Separator size="4" />
				<Flex direction="column" gap="4">
					VSCode
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Tools;
