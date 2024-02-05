import { MetadataRoute } from "next";

import { BASE_URL } from "@/lib/constants";

const robots = (): MetadataRoute.Robots => {
	return {
		rules: [
			{
				userAgent: "*",
				allow: "/",
			},
		],
		sitemap: `${BASE_URL}/sitemap.xml`,
		host: BASE_URL,
	};
};

export default robots;
