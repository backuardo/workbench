"use client";

import { createContext, useContext, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import analytics from "@vercel/analytics";
import { useDebouncedCallback } from "use-debounce";
import {
	Card as RadixCard,
	DropdownMenu,
	Flex,
	Grid as RadixGrid,
	Text,
	TextField,
	IconButton,
} from "@radix-ui/themes";
import {
	Check,
	ArrowUUpLeft,
	MagnifyingGlass,
	Hash,
	X,
} from "@phosphor-icons/react/dist/ssr";

import { PreviewData } from "@/lib/types";
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

/* -------------------------------------------------------------------------------------------------
 * Context
 * -----------------------------------------------------------------------------------------------*/

type PreviewContextValue = {
	includedTags: string[];
	allTags: string[];
	previews: PreviewData[];
	toggleIncludedTag: (tag: string) => void;
	resetIncludedTags: () => void;
};

const PreviewContext = createContext<PreviewContextValue>({
	includedTags: [],
	allTags: [],
	previews: [],
	toggleIncludedTag: (tag: string) => null,
	resetIncludedTags: () => null,
});

const usePreviewContext = () => {
	return useContext(PreviewContext);
};

export const Provider: React.FC<{
	previewData: PreviewData[];
	children: React.ReactNode | React.ReactNode[];
}> = ({ previewData, children }) => {
	const allTags = getAllTags(previewData).sort();
	const [includedTags, setIncludedTags] = useState(allTags);

	const toggleIncludedTag = (tag: string) => {
		if (includedTags.includes(tag)) {
			setIncludedTags(
				includedTags.filter((includedTag) => includedTag !== tag)
			);
			analytics.track("remove tag", { tag });
		} else {
			setIncludedTags([...includedTags, tag]);
			analytics.track("add tag", { tag });
		}
	};

	const resetIncludedTags = () => {
		setIncludedTags(allTags);
	};

	const previews = useMemo(() => {
		return filterIncludedTags(previewData, includedTags);
	}, [previewData, includedTags]);

	return (
		<PreviewContext.Provider
			value={{
				allTags,
				includedTags,
				toggleIncludedTag,
				resetIncludedTags,
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
	const { allTags, includedTags, toggleIncludedTag, resetIncludedTags } =
		usePreviewContext();
	const [tagsDropdownOpen, setTagsDropdownOpen] = useState(false);
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();

	const handleInputChange = useDebouncedCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const searchTerm = e.target.value;
			const params = new URLSearchParams(searchParams);
			if (searchTerm) {
				params.set("query", searchTerm);
			} else {
				params.delete("query");
			}
			replace(`${pathname}?${params.toString()}`);
		},
		250
	);

	return (
		<Flex justify="end" gap="2">
			<TextField.Root size="2" variant="surface">
				<TextField.Slot>
					<MagnifyingGlass />
				</TextField.Slot>
				<TextField.Input
					defaultValue={searchParams.get("query")?.toString()}
					onChange={handleInputChange}
					placeholder="Search"
					aria-label="Search"
					key="search-bar"
					variant="surface"
					className="placeholder:uppercase pt-[0.15rem] font-medium"
				/>
			</TextField.Root>
			<DropdownMenu.Root open={tagsDropdownOpen}>
				<DropdownMenu.Trigger>
					<IconButton
						variant="surface"
						size="2"
						radius="full"
						className="uppercase bg-accent-2"
						onClick={() => setTagsDropdownOpen((prev) => !prev)}
					>
						{tagsDropdownOpen ? <X /> : <Hash />}
					</IconButton>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content
					size="2"
					align="end"
					sideOffset={14}
					onInteractOutside={() => setTagsDropdownOpen((prev) => !prev)}
				>
					{allTags.map((tag) => (
						<DropdownMenu.Item
							key={tag}
							onClick={() => toggleIncludedTag(tag)}
							onSelect={(e) => e.preventDefault()}
							className="uppercase gap-2 flex w-48"
						>
							{tag} {includedTags.includes(tag) && <Check />}
						</DropdownMenu.Item>
					))}
					<DropdownMenu.Item
						onClick={resetIncludedTags}
						className="uppercase gap-2 bg-gray-3 hover:bg-gray-8 hover:text-gray-12 border-gray-5 border-1 border-dashed font-bold"
					>
						Reset <ArrowUUpLeft />
					</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
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
						<Text weight="bold" size="4" className="text-gray-11 uppercase">
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
