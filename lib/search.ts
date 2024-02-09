import { TfIdf } from "natural/lib/natural/tfidf";
import { NGrams } from "natural/lib/natural/ngrams";

import { getPostSlugs, getPostDataBySlug } from "@/lib/posts";

const createNgrams = (tokens: string[], n: number) => {
	let ngrams = [];
	for (let i = 0; i < tokens.length - n + 1; i++) {
		ngrams.push(tokens.slice(i, i + n).join(" "));
	}
	return ngrams;
};

export const search = (term: string) => {
	const tfidf = new TfIdf();
	const slugs = getPostSlugs();
	const posts = slugs.map(getPostDataBySlug);
	const scoresMap: Map<number, number> = new Map();

	if (!term) {
		return posts;
	}

	posts.forEach((post, index) => {
		const text = `${post.title} ${post.content} ${
			post.description
		} ${post.tags.join(" ")}`;
		tfidf.addDocument(text, index.toString());
	});

	tfidf.tfidfs(term, (index, score) => {
		if (!scoresMap.has(index)) {
			scoresMap.set(index, 0);
		}
		scoresMap.set(index, (scoresMap.get(index) ?? 0) + score);
	});

	const scores = Array.from(scoresMap).map(([index, score]) => ({
		index,
		score,
	}));
	const ranked = scores
		.filter(({ score }) => score > 0)
		.sort((a, b) => b.score - a.score)
		.map(({ index }) => posts[index]);

	return ranked;
};
