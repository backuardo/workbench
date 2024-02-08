export type PreviewData = {
	title: string;
	description: string;
	tags: string[];
	createdAt: Date;
	slug: string;
};

export type PostData = PreviewData & {
	content: string;
};

export enum SortKey {
	Asc = -1,
	Desc = 1,
}
