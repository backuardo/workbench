import { ExternalLink } from "@/components/ui/external-link";

type LinkProps = Omit<
	React.ComponentPropsWithoutRef<typeof ExternalLink>,
	"as" | "color"
>;

export const Link = ({ children, ...props }: LinkProps) => {
	return (
		<ExternalLink
			{...(props as Record<string, any>)}
			href={props.href}
			className="text-accent-11"
		>
			{children}
		</ExternalLink>
	);
};
