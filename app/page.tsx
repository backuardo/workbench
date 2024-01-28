import { NextPage } from "next";
import { Flex, Heading } from "@radix-ui/themes";

import { getPostData } from "@/lib/posts";
import { Previews } from "@/components/ui/previews";

const Home: NextPage = async () => {
	const postData = getPostData();

	return (
		<Flex gap="6" direction="column" my="8">
			<Heading size="7">Experiments & patterns</Heading>
			<Previews previewData={postData} />
		</Flex>
	);
};

export default Home;
