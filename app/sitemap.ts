import { MetadataRoute } from "next";

import { getPostSlugs } from "@/lib/posts";
import { BASE_URL } from "@/lib/config";

const sitemap = (): MetadataRoute.Sitemap => {
	return [
		{
			url: BASE_URL,
			lastModified: new Date(),
		},
		{
			url: `${BASE_URL}/about`,
			lastModified: new Date(),
		},
		{
			url: `${BASE_URL}/workbench`,
			lastModified: new Date(),
		},
		...getPostSlugs().map((slug) => ({
			url: `${BASE_URL}/workbench/${slug}`,
			lastModified: new Date(),
		})),
	];
};

export default sitemap;
