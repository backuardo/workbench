import { Code as RadixCode } from "@radix-ui/themes";
import { cn } from "@/lib/cn";

type CodeProps = Omit<
	React.ComponentPropsWithoutRef<typeof RadixCode>,
	"as" | "color"
>;

export const Code = ({ children, className, ...props }: CodeProps) => {
	return (
		<RadixCode
			{...(props as Record<string, any>)}
			className={cn("whitespace-pre-wrap break-words text-1", className)}
		>
			{children}
		</RadixCode>
	);
};
