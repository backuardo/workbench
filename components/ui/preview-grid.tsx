import Link from "next/link";
import { Card, Flex, Grid, Text } from "@radix-ui/themes";

import { PreviewData } from "@/lib/types";
import { BadgeList } from "@/components/ui/badge-list";
import { FormattedDate } from "@/components/ui/formatted-date";

export const PreviewCard: React.FC<PreviewData> = ({
	slug,
	title,
	createdAt,
	description,
	tags,
}) => {
	return (
		<Card size="2" variant="surface" className="bg-gray-3" asChild>
			<Link href={`/${slug}`}>
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
		</Card>
	);
};

export const PreviewGrid: React.FC<{ previews: PreviewData[] }> = ({
	previews,
}) => {
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
		<Grid
			columns={{
				initial: "1",
				// sm: "2",
				// lg: "3",
			}}
			gap="4"
			width="auto"
		>
			{previews.map((previewData) => (
				<PreviewCard key={previewData.slug} {...previewData} />
			))}
		</Grid>
	);
};
