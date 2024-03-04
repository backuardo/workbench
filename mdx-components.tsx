import { MDXComponents } from "mdx/types";
import { Blockquote, Em, Kbd, Text, Strong } from "@radix-ui/themes";

import { Code } from "@/components/mdx/code";
import { Heading } from "@/components/mdx/heading";
import { Link } from "@/components/mdx/link";
import { Paragraph } from "@/components/mdx/paragraph";

export const useMDXComponents = (components: MDXComponents): MDXComponents => {
	return {
		// @ts-ignore
		blockquote: Blockquote,
		code: Code,
		// @ts-ignore
		a: Link,
		// @ts-ignore
		em: Em,
		h1: Heading.H1,
		h2: Heading.H2,
		h3: Heading.H3,
		h4: Heading.H4,
		p: Paragraph,
		Kbd: Kbd,
		// strong: Strong,
		...components,
	};
};
