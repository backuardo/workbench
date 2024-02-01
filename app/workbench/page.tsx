import { NextPage } from "next";
import { Flex, Heading, Text } from "@radix-ui/themes";

import { getPostData } from "@/lib/posts";
import { Previews } from "@/components/previews";

const Workbench: NextPage = async () => {
	const postData = getPostData();

	return (
		<Flex gap="4" direction="column" my="4">
			<Flex direction="column" gap="1" className="md:max-w-md">
				<Heading size="6" className="uppercase">
					Workbench
				</Heading>
				<Text size="2" weight="light">
					Primarily for my own reference.
				</Text>
			</Flex>
			<Previews previewData={postData} />
		</Flex>
	);
};

export default Workbench;
