import Link from "next/link";
import { Card, Flex, Grid, Text } from "@radix-ui/themes";

import { getPostDataBySlug } from "@/lib/posts";
import { BadgeList } from "@/components/ui/badge-list";
import { FormattedDate } from "@/components/ui/formatted-date";

export const PreviewCard: React.FC<{ slug: string }> = ({ slug }) => {
	const matter = getPostDataBySlug(slug);

	if (!matter) {
		return null;
	}

	return (
		<Card size="2" variant="surface" asChild>
			<Link href={`/p/${slug}`}>
				<Flex direction="column" gap="6" height="100%" justify="between">
					<Flex direction="column" gap="1">
						<Text weight="bold" size="5">
							{matter.title}
						</Text>
						<FormattedDate date={matter.createdAt} />
						<Text size="2" weight="light" mt="2">
							{matter.description}
						</Text>
					</Flex>
					<Flex justify="between">
						<BadgeList labels={matter.tags} className="hover:cursor-pointer" />
					</Flex>
				</Flex>
			</Link>
		</Card>
	);
};

export const PreviewGrid: React.FC<{ slugs: string[] }> = ({ slugs }) => {
	return (
		<Grid
			columns={{
				initial: "1",
				sm: "2",
				lg: "3",
			}}
			gap="4"
			width="auto"
		>
			{slugs.map((slug) => (
				<PreviewCard key={slug} slug={slug} />
			))}
		</Grid>
	);
};
