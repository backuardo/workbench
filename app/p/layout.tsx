import type { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
	return {
		title: {
			template: "%s | WORKBENCH",
			default: "WORKBENCH",
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
