"use client";

import { createContext, useContext, useMemo, useState } from "react";
import Link from "next/link";
import {
	Button,
	Card as RadixCard,
	DropdownMenu,
	Flex,
	Grid as RadixGrid,
	Text,
} from "@radix-ui/themes";
import {
	CaretSortIcon,
	CheckIcon,
	MixerHorizontalIcon,
	ResetIcon,
} from "@radix-ui/react-icons";

import { PreviewData, SortKey } from "@/lib/types";
import { FormattedDate } from "@/components/ui/formatted-date";
import { BadgeList } from "@/components/ui/badge-list";

/* -------------------------------------------------------------------------------------------------
 * Helpers
 * -----------------------------------------------------------------------------------------------*/

const getAllTags = (previewData: PreviewData[]) => {
	return Array.from(new Set(previewData.flatMap(({ tags }) => tags)));
};

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

/* -------------------------------------------------------------------------------------------------
 * Context
 * -----------------------------------------------------------------------------------------------*/

type PreviewContextValue = {
	sortKey: SortKey;
	includedTags: string[];
	allTags: string[];
	previews: PreviewData[];
	toggleIncludedTag: (tag: string) => void;
	resetIncludedTags: () => void;
	toggleSortKey: () => void;
};

const PreviewContext = createContext<PreviewContextValue>({
	sortKey: SortKey.Desc,
	includedTags: [],
	allTags: [],
	previews: [],
	toggleIncludedTag: (tag: string) => null,
	resetIncludedTags: () => null,
	toggleSortKey: () => null,
});

const usePreviewContext = () => {
	return useContext(PreviewContext);
};

export const Provider: React.FC<{
	previewData: PreviewData[];
	children: React.ReactNode | React.ReactNode[];
}> = ({ previewData, children }) => {
	const allTags = getAllTags(previewData).sort();
	const [sortKey, setSortKey] = useState(SortKey.Desc);
	const [includedTags, setIncludedTags] = useState(allTags);

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

	const previews = useMemo(() => {
		const filteredPreviews = filterIncludedTags(previewData, includedTags);
		const sortedPreviews = sortPreviewsByDate(filteredPreviews, sortKey);
		return sortedPreviews;
	}, [previewData, includedTags, sortKey]);

	return (
		<PreviewContext.Provider
			value={{
				sortKey,
				allTags,
				includedTags,
				toggleIncludedTag,
				resetIncludedTags,
				toggleSortKey,
				previews,
			}}
		>
			{children}
		</PreviewContext.Provider>
	);
};

/* -------------------------------------------------------------------------------------------------
 * Components
 * -----------------------------------------------------------------------------------------------*/

export const SearchBar: React.FC = () => {
	const {
		allTags,
		includedTags,
		toggleIncludedTag,
		resetIncludedTags,
		sortKey,
		toggleSortKey,
	} = usePreviewContext();
	return (
		<Flex justify="end" gap="2">
			<DropdownMenu.Root>
				<DropdownMenu.Trigger>
					<Button
						variant="surface"
						size="1"
						className="uppercase bg-accent-2"
						highContrast
					>
						Tags
						<MixerHorizontalIcon />
					</Button>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content>
					{allTags.map((tag) => (
						<DropdownMenu.Item
							key={tag}
							onClick={() => toggleIncludedTag(tag)}
							onSelect={(e) => e.preventDefault()}
							className="uppercase gap-2 flex w-36"
						>
							{tag} {includedTags.includes(tag) && <CheckIcon />}
						</DropdownMenu.Item>
					))}
					<DropdownMenu.Item
						onClick={resetIncludedTags}
						className="uppercase gap-2 bg-gray-3 hover:bg-gray-5 hover:text-gray-12 border-gray-5 border-1"
					>
						Reset <ResetIcon />
					</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
			<Button
				size="1"
				variant="surface"
				className="uppercase"
				onClick={toggleSortKey}
				highContrast
			>
				{sortKey === SortKey.Desc ? "Newest" : "Oldest"}
				<CaretSortIcon />
			</Button>
		</Flex>
	);
};

const Card: React.FC<PreviewData> = ({
	slug,
	title,
	createdAt,
	description,
	tags,
}) => {
	return (
		<RadixCard size="2" variant="surface" className="bg-gray-2" asChild>
			<Link href={`/workbench/${slug}`}>
				<Flex direction="column" gap="6" height="100%" justify="between">
					<Flex direction="column" gap="1">
						<Text weight="bold" size="5">
							{title}
						</Text>
						<FormattedDate date={createdAt} />
						<Text size="2" weight="light" mt="2">
							{description}
						</Text>
					</Flex>
					<Flex justify="between">
						<BadgeList labels={tags} className="hover:cursor-pointer" />
					</Flex>
				</Flex>
			</Link>
		</RadixCard>
	);
};

export const Grid: React.FC = () => {
	const { previews } = usePreviewContext();

	if (!previews.length) {
		return (
			<Flex
				direction="column"
				align="center"
				justify="center"
				height="100%"
				gap="4"
			>
				<Text size="6" weight="bold">
					No results
				</Text>
				<Text size="2" weight="light">
					Update your search query or try a different tag
				</Text>
			</Flex>
		);
	}

	return (
		<RadixGrid
			columns={{
				initial: "1",
			}}
			gap="4"
			width="auto"
		>
			{previews.map((previewData) => (
				<Card key={previewData.slug} {...previewData} />
			))}
		</RadixGrid>
	);
};
