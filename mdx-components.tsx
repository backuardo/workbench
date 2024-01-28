import { MDXComponents } from "mdx/types";
import { Blockquote, Code, Em, Kbd, Link, Strong } from "@radix-ui/themes";

import { Heading } from "@/components/mdx/heading";

export const useMDXComponents = (components: MDXComponents): MDXComponents => {
	return {
		blockquote: Blockquote,
		code: Code,
		em: Em,
		h1: Heading.H1,
		h2: Heading.H2,
		h3: Heading.H3,
		h4: Heading.H4,
		Kbd: Kbd,
		strong: Strong,
		...components,
	};
};
