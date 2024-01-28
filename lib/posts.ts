import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

import { PreviewData } from "@/lib/types";

const postsDirectory = join(process.cwd(), "app/p");

export const getPostSlugs = () => {
	const slugs = fs.readdirSync(postsDirectory);
	return slugs;
};

export const getPostDataBySlug = (slug: string) => {
	const path = join(postsDirectory, slug, "page.mdx");
	const fileContents = fs.readFileSync(path, "utf8");
	const { data } = matter(fileContents);
	return {
		...data,
		slug,
	} as PreviewData;
};
