import { NextPage } from "next";
import { Text } from "@radix-ui/themes";

import { getPostData } from "@/lib/posts";
import { Section } from "@/components/ui/section";
import * as Preview from "@/components/preview";

export const metadata = {
	title: "Workbench",
	description: "Patterns, experiments, ideas, etc.",
};

const Workbench: NextPage = async () => {
	const postData = getPostData();

	return (
		<Section.Container>
			<Preview.Provider previewData={postData}>
				<Section.Heading title="Workbench">
					<Preview.SearchBar />
				</Section.Heading>
				<Section.Content>
					<Text className="text-grayA-11">
						A collection of ideas, experiments, and helpful code snippets for
						the web.
					</Text>
					<Text className="text-grayA-11">
						Much of the content draws inspiration from the efforts of others,
						including direct references to their work. I am committed to
						acknowledging their contributions and ensuring proper credit is
						given to the original authors.
					</Text>
					<Preview.Grid />
				</Section.Content>
			</Preview.Provider>
		</Section.Container>
	);
};

export default Workbench;
