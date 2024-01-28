import type { Metadata } from "next";
import { Box, Flex, Link } from "@radix-ui/themes";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

export const generateMetadata = async (): Promise<Metadata> => {
	return {
		title: {
			template: "%s | Backuardo's Workbench",
			default: "Backuardo's Workbench",
		},
	};
};

const PLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<Box className="mb-rx-6">
			<Flex pt="2" pb="6">
				<Link href="/">
					<Flex gap="2" align="center">
						<ArrowLeftIcon />
						Back
					</Flex>
				</Link>
			</Flex>
			{children}
		</Box>
	);
};

export default PLayout;
