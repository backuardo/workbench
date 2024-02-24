import { NextPage } from "next";

import { Section } from "@/components/layout/section";
import { Hero } from "@/components/ui/hero";

export const metadata = {
	title: "INDEX | beneisner.io",
	description: "INDEX",
};

const Home: NextPage = async () => {
	return (
		<Section.Container>
			<Section.Content align="center" justify="center">
				<Hero />
			</Section.Content>
		</Section.Container>
	);
};

export default Home;
