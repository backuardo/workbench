import { Metadata } from "next";
import Link from "next/link";
import { Flex, Heading, Text } from "@radix-ui/themes";

export const metadata: Metadata = {
	title: "404",
	description: "Page not found",
};

const NotFound: React.FC = () => {
	return (
		<Flex direction="column" align="center" justify="center" gap="4">
			<Heading as="h1" size="8" weight="bold" className="uppercase">
				Page not found
			</Heading>
			<Link href="/">
				<Text size="4" className="text-gray-10 hover:text-gray-12">
					Go home
				</Text>
			</Link>
		</Flex>
	);
};

export default NotFound;
