import { NextPage } from "next";
import { Flex, Heading, Text } from "@radix-ui/themes";

import { getPostData } from "@/lib/posts";
import { Previews } from "@/components/previews";

const Home: NextPage = async () => {
	const postData = getPostData();

	return (
		<Flex gap="6" direction="column" my="8">
			<Flex direction="column" gap="2" className="md:max-w-md">
				<Heading size="7">Experiments & patterns</Heading>
				<Text size="2" weight="light">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
					quidem, voluptas, voluptatem, quos voluptatum doloremque dolorum
					asperiores quas autem quibusdam quae.
				</Text>
			</Flex>
			<Previews previewData={postData} />
		</Flex>
	);
};

export default Home;
