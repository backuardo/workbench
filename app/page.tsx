import { NextPage } from "next";
import { Flex, Heading, Separator, Text } from "@radix-ui/themes";
import { Section } from "@/components/ui/section";

export const metadata = {
	title: "Index | beneisner.io",
	description: "Index",
};

const Home: NextPage = async () => {
	return (
		<Section.Container>
			<Section.Heading title="Home" />
			<Section.Content>
				<Text size="3" weight="light" className="text-grayA-11">
					Welcome. This will be an incredible little WebGL experience.
				</Text>
			</Section.Content>
		</Section.Container>
	);
};

export default Home;
