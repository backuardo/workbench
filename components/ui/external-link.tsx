import { Link } from "@radix-ui/themes";

import { cn } from "@/lib/cn";

export const ExternalLink: React.FC<{
	href: string;
	children: React.ReactNode | React.ReactNode[];
	className?: string;
}> = ({ href, children, className = "" }) => {
	return (
		<Link
			href={href}
			className={cn("text-gray-12", className)}
			target="_blank"
			rel="noreferrer noopener"
		>
			{children}
		</Link>
	);
};
