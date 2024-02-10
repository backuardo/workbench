import InternalLink from "next/link";
import { Link as ExternalLink } from "@radix-ui/themes";

import { cn } from "@/lib/cn";

const externalLinkAttributes = Object.freeze({
	target: "_blank",
	rel: "noreferrer noopener",
});

export const Link: React.FC<{
	href: string;
	children: React.ReactNode | React.ReactNode[];
	className?: string;
}> = ({ href, children, className = "" }) => {
	const isExternalUrl = href.startsWith("http");
	const _Link = isExternalUrl ? ExternalLink : InternalLink;
	return (
		<_Link
			href={href}
			className={cn("text-gray-12 hover:text-accent-10", className)}
			{...(isExternalUrl ? externalLinkAttributes : {})}
		>
			{children}
		</_Link>
	);
};
