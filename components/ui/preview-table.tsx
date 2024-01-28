import { Table, Text } from "@radix-ui/themes";

import { getPostDataBySlug } from "@/lib/posts";
import { BadgeList } from "@/components/ui/badge-list";
import { FormattedDate } from "@/components/ui/formatted-date";

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
				<BadgeList labels={matter.tags} />
			</Table.Cell>
			<Table.Cell align="center" justify="end">
				<FormattedDate date={matter.createdAt} />
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
