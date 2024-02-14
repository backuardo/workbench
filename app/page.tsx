import { NextPage } from "next";
import { Flex, Heading, Separator, Text } from "@radix-ui/themes";

import { Section } from "@/components/ui/section";
import { Scene } from "@/components/web-gl/scene";
import { ArcadeFighter } from "@/components/web-gl/arcade-fighter";

export const metadata = {
	title: "INDEX | beneisner.io",
	description: "INDEX",
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
