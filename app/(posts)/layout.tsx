import { Box } from "@radix-ui/themes";
import type { Metadata } from "next";

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
	return <Box className="mb-rx-6">{children}</Box>;
};

export default PLayout;
