import withMDX from "@next/mdx";
import remarkFrontmatter from "remark-frontmatter";

import packageJson from "./package.json" with { type: "json" };

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
	env: {
		APP_VERSION: packageJson.version,
	},
};

export default withMDX({
	options: {
		remarkPlugins: [
			// https://github.com/remarkjs/remark/blob/main/doc/plugins.md
			remarkFrontmatter,
		],
		rehypePlugins: [
			// https://github.com/rehypejs/rehype/blob/main/doc/plugins.md
		],
	},
})(nextConfig);
