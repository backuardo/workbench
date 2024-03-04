import { cn } from "@/lib/cn";
import { Flex } from "@radix-ui/themes";

import { P } from "@/components/ui/typography";

type ParagraphProps = Omit<
	React.ComponentPropsWithoutRef<typeof P>,
	"as" | "color"
>;

export const Paragraph = ({
	children,
	className,
	...props
}: ParagraphProps) => {
	return (
		<Flex my="4">
			<P {...(props as Record<string, any>)} className={cn("", className)}>
				{children}
			</P>
		</Flex>
	);
};
