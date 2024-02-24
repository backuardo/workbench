import { NextPage } from "next";
import { Text } from "@radix-ui/themes";

import { Section } from "@/components/layout/section";
import * as Preview from "@/components/ui/workbench-preview";
import { search } from "@/lib/search";
import { PreviewData } from "@/lib/types";

export const metadata = {
	title: "WORKBENCH",
	description: "Patterns, experiments, ideas, etc.",
};

const getKey = (postData: PreviewData[]) => {
	return postData
		.slice(0, postData.length >= 5 ? 5 : postData.length)
		.map((post) => post.slug)
		.join("-");
};

const Workbench: NextPage = async ({
	searchParams,
}: {
	searchParams?: {
		query?: string;
	};
}) => {
	const query = searchParams?.query || "";
	const postData = search(query);

	return (
		<Section.Container>
			<Preview.Provider previewData={postData}>
				<Section.Heading title="Workbench">
					<Preview.SearchBar />
				</Section.Heading>
				<Section.Content>
					<Text className="text-grayA-11 text-justify">
						A collection of ideas, experiments, and helpful code snippets for
						the web.
					</Text>
					<Text className="text-grayA-11 text-justify">
						Much of the content draws inspiration from the efforts of others,
						including direct references to their work. I am committed to
						acknowledging their contributions and ensuring proper credit is
						given to the original authors.
					</Text>
					<Preview.Grid key={getKey(postData)} />
				</Section.Content>
			</Preview.Provider>
		</Section.Container>
	);
};

export default Workbench;
