import type { Metadata, ResolvingMetadata } from "next";
import { parse } from "path";

// export const metadata: Metadata = {
// 	title: "WORKBENCH",
// 	description: "A collection of patterns and experiments for the web.",
// };

export const generateMetadata = async (
	props: {},
	parent: ResolvingMetadata
): Promise<Metadata> => {
	const title = "blog title";
	return {
		title: `WORKBENCH - ${title}`,
		description: "A collection of patterns and experiments for the web.",
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
