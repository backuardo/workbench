import { NextPage } from "next";

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
					<Preview.Grid />
				</Section.Content>
			</Preview.Provider>
		</Section.Container>
	);
};

export default Workbench;
