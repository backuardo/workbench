"use client";

import { Button, DropdownMenu, Flex } from "@radix-ui/themes";
import {
	MixerHorizontalIcon,
	CaretSortIcon,
	CheckIcon,
} from "@radix-ui/react-icons";

import { SortKey } from "@/lib/types";

export const SearchBar: React.FC<{
	tags: string[];
	includedTags: string[];
	toggleIncludedTag: (tag: string) => void;
	sortKey: SortKey;
	toggleSortKey: () => void;
}> = ({ tags, includedTags, toggleIncludedTag, sortKey, toggleSortKey }) => {
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
					{tags.map((tag) => (
						<DropdownMenu.Item
							key={tag}
							onClick={() => toggleIncludedTag(tag)}
							onSelect={(e) => e.preventDefault()}
							className="uppercase gap-2 flex w-36"
						>
							{tag} {includedTags.includes(tag) && <CheckIcon />}
						</DropdownMenu.Item>
					))}
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
