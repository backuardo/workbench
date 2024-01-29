import { NextPage } from "next";
import { Flex, Heading, Text } from "@radix-ui/themes";

import { getPostData } from "@/lib/posts";
import { Previews } from "@/components/previews";

const Home: NextPage = async () => {
	const postData = getPostData();

	return (
		<Flex gap="6" direction="column" my="8">
			<Flex direction="column" gap="1" className="md:max-w-md">
				<Heading size="6" className="uppercase">
					Patterns, gists, and ideas
				</Heading>
				<Text size="2" weight="light">
					Primarily for my own reference.
				</Text>
			</Flex>
			<Previews previewData={postData} />
		</Flex>
	);
};

export default Home;
