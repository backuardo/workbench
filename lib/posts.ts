import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

import { PostData, PreviewData } from "@/lib/types";

const postsDirectory = join(process.cwd(), "app/workbench/(posts)");

export const getFileContentsBySlug = (slug: string) => {
	const path = join(postsDirectory, slug, "page.mdx");
	const fileContents = fs.readFileSync(path, "utf8");
	return fileContents as PostData["content"];
};

export const getPostPreviewDataBySlug = (slug: string) => {
	const fileContents = getFileContentsBySlug(slug);
	const { data } = matter(fileContents);
	return {
		...data,
		slug,
	} as PreviewData;
};

export const getPostDataBySlug = (slug: string): PostData => {
	const fileContents = getFileContentsBySlug(slug);
	const { content, data } = matter(fileContents);
	return {
		content,
		...data,
		slug,
	} as PostData;
};

export const getPostSlugs = () => {
	const entries = fs.readdirSync(postsDirectory);
	const slugs = entries.filter((entry) => {
		const entryPath = join(postsDirectory, entry);
		return fs.statSync(entryPath).isDirectory();
	});
	return slugs as PreviewData["slug"][];
};

export const getPostPreviewData = () => {
	const slugs = getPostSlugs();
	const postData = slugs.map(getPostPreviewDataBySlug);
	return postData;
};
