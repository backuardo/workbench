import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

import { PreviewData } from "@/lib/types";

const postsDirectory = join(process.cwd(), "app/p");

export const getPostSlugs = () => {
	const entries = fs.readdirSync(postsDirectory);
	const slugs = entries.filter((entry) => {
		const entryPath = join(postsDirectory, entry);
		return fs.statSync(entryPath).isDirectory();
	});
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

export const getPostData = () => {
	const slugs = getPostSlugs();
	const postData = slugs.map(getPostDataBySlug);
	return postData;
};
