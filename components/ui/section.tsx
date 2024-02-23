import { Flex, Heading as RadixHeading } from "@radix-ui/themes";

const Container: React.FC<React.ComponentProps<typeof Flex>> = ({
	children,
	...props
}) => {
	return (
		<Flex gap="4" direction="column" mt="4" {...props}>
			{children}
		</Flex>
	);
};

const Heading: React.FC<{
	title: string;
	children?: React.ReactNode;
}> = ({ title, children }) => {
	return (
		<Flex direction="column" gap="3">
			<Flex justify="between" align="center" px="4">
				<RadixHeading size="6" className="uppercase text-accent-9">
					{title}
				</RadixHeading>
				{children}
			</Flex>
			{/* <Separator size="4" /> */}
		</Flex>
	);
};

const Content: React.FC<React.ComponentProps<typeof Flex>> = ({
	children,
	...props
}) => {
	return (
		<Flex direction="column" gap="4" px="4" {...props}>
			{children}
		</Flex>
	);
};
export const Section = {
	Container,
	Heading,
	Content,
};
