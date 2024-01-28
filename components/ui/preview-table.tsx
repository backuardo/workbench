import { Badge, Flex, Table, Text } from "@radix-ui/themes";
import { format } from "date-fns";

import { getPostDataBySlug } from "@/lib/posts";

const PreviewTableRow: React.FC<{ slug: string }> = ({ slug }) => {
	const matter = getPostDataBySlug(slug);

	if (!matter) {
		return null;
	}

	return (
		<Table.Row key={slug} align="baseline">
			<Table.RowHeaderCell className="py-rx-4">
				<Text size="3" weight="medium">
					{matter.title}
				</Text>
			</Table.RowHeaderCell>
			<Table.Cell>
				<Flex gap="2" align="center">
					{matter.tags.map((tag) => (
						<Badge
							key={tag}
							variant="surface"
							highContrast
							className="uppercase"
						>
							{tag}
						</Badge>
					))}
				</Flex>
			</Table.Cell>
			<Table.Cell align="center" justify="center">
				<Text size="1" weight="bold" className="text-accent-11">
					{format(matter.createdAt, "MMM do, y")}
				</Text>
			</Table.Cell>
		</Table.Row>
	);
};

export const PreviewTable: React.FC<{ slugs: string[] }> = ({ slugs }) => {
	return (
		<Table.Root variant="surface">
			<Table.Body>
				{slugs.map((slug) => (
					<PreviewTableRow key={slug} slug={slug} />
				))}
			</Table.Body>
		</Table.Root>
	);
};
