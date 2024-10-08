import { Text as RadixText } from "@radix-ui/themes";

import { cn } from "@/lib/cn";

export const P: React.FC<React.ComponentProps<typeof RadixText>> = ({
	children,
	className,
	...props
}) => {
	return (
		<RadixText
			size="3"
			weight="light"
			className={cn("text-grayA-10 text-justify break-words", className)}
			{...props}
		>
			{children}
		</RadixText>
	);
};
