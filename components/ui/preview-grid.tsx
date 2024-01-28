import Link from "next/link";
import { Badge, Box, Card, Flex, Grid, Text } from "@radix-ui/themes";
import { format } from "date-fns";

import { getPostDataBySlug } from "@/lib/posts";

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
						<Text size="1" weight="bold" className="text-accent-8">
							{format(matter.createdAt, "MMM do, y")}
						</Text>
						<Text size="2" weight="light" mt="2">
							{matter.description}
						</Text>
					</Flex>
					<Flex justify="between">
						<Flex gap="2">
							{matter.tags.map((tag) => (
								<Box key={tag}>
									<Badge
										variant="surface"
										highContrast
										className="hover:cursor-pointer uppercase"
									>
										{tag}
									</Badge>
								</Box>
							))}
						</Flex>
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
