"use client";

import { useMemo, useState } from "react";
import { type PreviewData } from "@/lib/types";

import { SortKey } from "@/lib/types";
import { PreviewGrid } from "@/components/ui/preview-grid";
import { SearchBar } from "@/components/ui/search-bar";

const filterIncludedTags = (
	previewData: PreviewData[],
	includedTags: string[]
) => {
	return previewData.filter(({ tags }) =>
		includedTags.some((tag) => tags.includes(tag))
	);
};

const sortPreviewsByDate = (previewData: PreviewData[], sortKey: SortKey) => {
	return previewData.sort((a, b) => {
		if (a.createdAt < b.createdAt) {
			return sortKey;
		} else if (a.createdAt > b.createdAt) {
			return -sortKey;
		} else {
			return 0;
		}
	});
};

const getAllTags = (previewData: PreviewData[]) => {
	return Array.from(new Set(previewData.flatMap(({ tags }) => tags)));
};

export const Previews: React.FC<{
	previewData: PreviewData[];
}> = ({ previewData }) => {
	const allTags = getAllTags(previewData).sort();
	const [includedTags, setIncludedTags] = useState(allTags);
	const [sortKey, setSortKey] = useState(SortKey.Desc);

	const previews = useMemo(() => {
		const filteredPreviews = filterIncludedTags(previewData, includedTags);
		const sortedPreviews = sortPreviewsByDate(filteredPreviews, sortKey);
		return sortedPreviews;
	}, [previewData, includedTags, sortKey]);

	const toggleIncludedTag = (tag: string) => {
		if (includedTags.includes(tag)) {
			setIncludedTags(
				includedTags.filter((includedTag) => includedTag !== tag)
			);
		} else {
			setIncludedTags([...includedTags, tag]);
		}
	};

	const resetIncludedTags = () => {
		setIncludedTags(allTags);
	};

	const toggleSortKey = () => {
		setSortKey(sortKey === SortKey.Asc ? SortKey.Desc : SortKey.Asc);
	};

	return (
		<>
			<SearchBar
				tags={allTags}
				includedTags={includedTags}
				toggleIncludedTag={toggleIncludedTag}
				resetIncludedTags={resetIncludedTags}
				sortKey={sortKey}
				toggleSortKey={toggleSortKey}
			/>
			<PreviewGrid previews={previews} />
		</>
	);
};
