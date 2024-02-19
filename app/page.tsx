import { NextPage } from "next";

import { Section } from "@/components/ui/section";
import { Hero } from "@/components/hero";

export const metadata = {
	title: "INDEX | beneisner.io",
	description: "INDEX",
};

const Home: NextPage = async () => {
	return (
		<Section.Container>
			<Section.Content>
				<Hero />
			</Section.Content>
		</Section.Container>
	);
};

export default Home;
