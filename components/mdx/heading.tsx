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
		size: "8",
		mt: "4",
		mb: "2",
	},
	[Level.H2]: {
		as: "h2",
		size: "6",
		mt: "3",
		mb: "1",
	},
	[Level.H3]: {
		as: "h3",
		size: "4",
		mt: "2",
		mb: "0",
	},
	[Level.H4]: {
		as: "h4",
		size: "3",
		mt: "2",
		mb: "0",
	},
}) as Record<string, HeadingProps>;

export const Heading = Object.keys(HEADINGS).reduce(
	(acc, key) => ({
		[key]: (props: HeadingProps) => <H {...HEADINGS[key]} {...props} />,
		...acc,
	}),
	{} as Record<Level, React.FC<HeadingProps>>
);
