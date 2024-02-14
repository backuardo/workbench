import { NextPage } from "next";
import { Flex, Heading, Separator, Text } from "@radix-ui/themes";
import { Section } from "@/components/ui/section";

export const metadata = {
	title: "INDEX | beneisner.io",
	description: "INDEX",
};

const Home: NextPage = async () => {
	return (
		<Section.Container>
			<Section.Content>
				<Flex></Flex>
			</Section.Content>
		</Section.Container>
	);
};

export default Home;
