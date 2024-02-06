import type { Metadata } from "next";
import Link from "next/link";
import { Box, Flex } from "@radix-ui/themes";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

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
		<Box mb="6">
			<Flex>
				<Link href="/workbench">
					<Flex gap="2" align="center" className="uppercase">
						<ArrowLeftIcon />
						Back
					</Flex>
				</Link>
			</Flex>
			{children}
		</Box>
	);
};

export default PostLayout;
