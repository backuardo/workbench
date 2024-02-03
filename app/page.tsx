import { NextPage } from "next";
import { Flex, Heading } from "@radix-ui/themes";

import { Scene } from "@/components/scene";

const Home: NextPage = async () => {
	return (
		<Flex gap="4" direction="column" my="4" height="100%">
			<Flex direction="column" gap="1" className="md:max-w-md">
				<Heading size="6" className="uppercase">
					Index
				</Heading>
			</Flex>
			<Scene />
		</Flex>
	);
};

export default Home;
