import InternalLink from "next/link";
import { Link as ExternalLink } from "@radix-ui/themes";

import { cn } from "@/lib/cn";
import { ComponentProps } from "react";

const externalLinkAttributes = Object.freeze({
	target: "_blank",
	rel: "noreferrer noopener",
});

export const Link: React.FC<
	ComponentProps<typeof ExternalLink | typeof InternalLink>
> = ({ href = "", children, className = "", ...props }) => {
	const isExternalUrl = typeof href === "string" && href.startsWith("http");
	const _Link = isExternalUrl ? ExternalLink : InternalLink;
	const linkProps = isExternalUrl
		? { href, ...externalLinkAttributes }
		: ({ href } as any);
	return (
		<_Link
			className={cn("text-gray-11 hover:text-accent-10", className)}
			{...linkProps}
			{...props}
		>
			{children}
		</_Link>
	);
};
