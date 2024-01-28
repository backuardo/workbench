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
	return <>{children}</>;
};

export default PLayout;
