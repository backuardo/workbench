import type { Metadata } from "next";
import Link from "next/link";
import { Box, Flex, ScrollArea } from "@radix-ui/themes";
import { ArrowElbowDownLeft } from "@phosphor-icons/react/dist/ssr";

import "@/styles/syntax-highlight.css";

export const generateMetadata = async (): Promise<Metadata> => {
	return {
		title: {
			template: "%s | beneisner.io",
			default: "beneisner.io",
		},
	};
};

const PostLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<Box p="4" className="h-full">
			<Flex className="h-full">
				<Link href="/workbench">
					<Flex
						gap="2"
						align="center"
						className="uppercase text-gray-10 hover:text-accent-10"
					>
						<ArrowElbowDownLeft />
						Back
					</Flex>
				</Link>
			</Flex>
			<ScrollArea>{children}</ScrollArea>
		</Box>
	);
};

export default PostLayout;
