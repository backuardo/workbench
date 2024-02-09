import { TfIdf } from "natural/lib/natural/tfidf";
import { JaroWinklerDistance } from "natural/lib/natural/distance";

import { getPostSlugs, getPostDataBySlug } from "@/lib/posts";

const SIMILARITY_THRESHOLD = 0.5;

const generateLowercaseString = (...args: string[]) =>
	args.map((arg) => arg.toLowerCase()).join(" ");

export const search = (term: string) => {
	const tfidf = new TfIdf();
	const slugs = getPostSlugs();
	const posts = slugs.map(getPostDataBySlug);
	const scoresMap: Map<number, number> = new Map();

	if (!term) {
		return posts;
	}

	const lowerCaseTerm = term.toLowerCase();

	posts.forEach((post, index) => {
		const text = generateLowercaseString(
			post.title,
			post.content,
			post.description,
			...post.tags
		);
		tfidf.addDocument(text, index.toString());
	});

	tfidf.tfidfs(lowerCaseTerm, (index, score) => {
		if (!scoresMap.has(index)) {
			scoresMap.set(index, 0);
		}
		scoresMap.set(index, (scoresMap.get(index) ?? 0) + score);
	});

	posts.forEach((post, index) => {
		const text = generateLowercaseString(
			post.title,
			post.content,
			post.description,
			...post.tags
		);
		const similarityScore = JaroWinklerDistance(lowerCaseTerm, text, {
			ignoreCase: true,
		});
		scoresMap.set(index, (scoresMap.get(index) ?? 0) + similarityScore);
	});

	const ranked = Array.from(scoresMap)
		.map(([index, score]) => ({
			index,
			score,
		}))
		.filter(({ score }) => score > SIMILARITY_THRESHOLD)
		.sort((a, b) => b.score - a.score)
		.map(({ index }) => posts[Number(index)]);

	return ranked;
};
