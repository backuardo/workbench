import { NextPage } from "next";
import { Box, Button, Flex, Heading } from "@radix-ui/themes";

import { getPostSlugs } from "@/lib/posts";
import { PreviewGrid } from "@/components/ui/preview-grid";
import { PreviewTable } from "@/components/ui/preview-table";

const Home: NextPage = async () => {
	const slugs = getPostSlugs();

	return (
		<Flex gap="8" direction="column" my="8">
			<Flex direction="column" gap="6">
				<Heading size="7">Latest</Heading>
				<PreviewGrid slugs={slugs} />
			</Flex>
			<Flex direction="column" gap="6">
				<Heading size="7">Archive</Heading>
				<PreviewTable slugs={slugs} />
			</Flex>
		</Flex>
	);
};

export default Home;
