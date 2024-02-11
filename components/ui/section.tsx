import { Flex, Heading as RadixHeading, Separator } from "@radix-ui/themes";

const Container: React.FC<{
	children: React.ReactNode | React.ReactNode[];
}> = ({ children }) => {
	return (
		<Flex gap="4" direction="column" my="4">
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
			<Flex justify="between" align="center">
				<RadixHeading size="6" className="uppercase">
					{title}
				</RadixHeading>
				{children}
			</Flex>
			<Separator size="4" />
		</Flex>
	);
};

const Content: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	return (
		<Flex direction="column" gap="4">
			{children}
		</Flex>
	);
};

export const Section = {
	Container,
	Heading,
	Content,
};
