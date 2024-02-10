import { NextPage } from "next";
import { Flex, Heading, Separator, Text } from "@radix-ui/themes";
import { Section } from "@/components/ui/section";

export const metadata = {
	title: "About",
	description: "About me",
};

const Home: NextPage = async () => {
	return (
		<Section.Container>
			<Section.Heading title="Home" />
			<Section.Content>
				<Text size="3" weight="light" className="text-grayA-11">
					Welcome. It looks like your browser doesnt support the incredible
					webGL experience that I have planned for this page. Please consider
					upgrading to VisionPro.
				</Text>
			</Section.Content>
		</Section.Container>
	);
};

export default Home;
