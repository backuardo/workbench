import { TfIdf } from "natural/lib/natural/tfidf";
import { JaroWinklerDistance } from "natural/lib/natural/distance";

import { getPostSlugs, getPostDataBySlug } from "@/lib/posts";
import { PostData, PreviewData } from "@/lib/types";

const SIMILARITY_THRESHOLD = 0.5;

const generateLowercaseString = (...args: string[]) =>
	args.map((arg) => arg.toLowerCase()).join(" ");

const prepareDocuments = (posts: PostData[]) => {
	return posts.map(({ title, content, description, tags }) =>
		generateLowercaseString(title, content, description, ...tags)
	);
};

const addToTfIdfModel = (tfidf: TfIdf, documents: string[]) => {
	documents.forEach((document, index) =>
		tfidf.addDocument(document, index.toString())
	);
};

const calculateScores = (tfidf: TfIdf, term: string, documents: string[]) => {
	const scoresMap: Map<number, number> = new Map();

	tfidf.tfidfs(term, (index, score) => {
		if (!scoresMap.has(index)) {
			scoresMap.set(index, 0);
		}
		scoresMap.set(index, (scoresMap.get(index) ?? 0) + score);
	});

	documents.forEach((doc, index) => {
		const similarityScore = JaroWinklerDistance(term, doc, {
			ignoreCase: true,
		});
		scoresMap.set(index, (scoresMap.get(index) ?? 0) + similarityScore);
	});

	return scoresMap;
};

const rankAndFilterResults = (
	scoresMap: Map<number, number>,
	posts: PostData[]
) => {
	return Array.from(scoresMap)
		.map(([index, score]) => ({ index, score }))
		.filter(({ score }) => score > SIMILARITY_THRESHOLD)
		.sort((a, b) => b.score - a.score)
		.map(({ index }) => posts[Number(index)]);
};

const trimResults = (results: PostData[]): PreviewData[] => {
	return results.map(({ title, description, tags, createdAt, slug }) => {
		return { title, description, tags, createdAt, slug };
	});
};

export const search = (term: string) => {
	const tfidf = new TfIdf();
	const slugs = getPostSlugs();
	const posts = slugs.map(getPostDataBySlug);

	if (!term) {
		return posts;
	}

	const documents = prepareDocuments(posts);
	addToTfIdfModel(tfidf, documents);
	const scoresMap = calculateScores(tfidf, term, documents);
	const rankedAndFilteredResults = rankAndFilterResults(scoresMap, posts);
	return trimResults(rankedAndFilteredResults);
};
