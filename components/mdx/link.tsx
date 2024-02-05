import { Link as _Link } from "@/components/ui/link";

type LinkProps = Omit<
	React.ComponentPropsWithoutRef<typeof _Link>,
	"as" | "color"
>;

export const Link = ({ children, ...props }: LinkProps) => {
	return (
		<_Link
			{...(props as Record<string, any>)}
			href={props.href}
			className="text-accent-11"
		>
			{children}
		</_Link>
	);
};
