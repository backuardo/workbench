import { NextPage } from "next";
import { Flex, Heading, Text } from "@radix-ui/themes";

import { getPostData } from "@/lib/posts";
import { Previews } from "@/components/previews";
import { Section } from "@/components/ui/section";

export const metadata = {
	title: "Workbench",
	description: "Patterns, experiments, ideas, etc.",
};

const Workbench: NextPage = async () => {
	const postData = getPostData();

	return (
		<Section.Container>
			<Section.Heading title="Workbench" />
			<Section.Content>
				<Previews previewData={postData} />
			</Section.Content>
		</Section.Container>
	);
};

export default Workbench;
