import { Code as RadixCode } from "@radix-ui/themes";

type CodeProps = Omit<
	React.ComponentPropsWithoutRef<typeof RadixCode>,
	"as" | "color"
>;

export const Code = ({ children, ...props }: CodeProps) => {
	return <RadixCode {...(props as Record<string, any>)}>{children}</RadixCode>;
};
