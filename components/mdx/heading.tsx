import { Heading as RadixHeading } from "@radix-ui/themes";

enum Level {
	H1 = "H1",
	H2 = "H2",
	H3 = "H3",
	H4 = "H4",
}

type HeadingProps = Omit<
	React.ComponentPropsWithoutRef<typeof RadixHeading>,
	"as" | "color"
>;

const H = ({ children, ...props }: HeadingProps) => {
	return (
		<RadixHeading {...(props as Record<string, any>)}>{children}</RadixHeading>
	);
};

const HEADINGS = Object.freeze({
	[Level.H1]: {
		as: "h1",
		weight: "bold",
		size: "8",
		mt: "6",
		mb: "6",
	},
	[Level.H2]: {
		as: "h2",
		weight: "bold",
		size: "6",
		mt: "5",
		mb: "5",
	},
	[Level.H3]: {
		as: "h3",
		weight: "bold",
		size: "4",
		mt: "4",
		mb: "4",
	},
	[Level.H4]: {
		as: "h4",
		weight: "bold",
		size: "3",
		mt: "3",
		mb: "3",
	},
}) as Record<string, HeadingProps>;

export const Heading = Object.keys(HEADINGS).reduce(
	(acc, key) => ({
		[key]: (props: HeadingProps) => <H {...HEADINGS[key]} {...props} />,
		...acc,
	}),
	{} as Record<Level, React.FC<HeadingProps>>
);
