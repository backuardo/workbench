export type PreviewData = {
	title: string;
	description: string;
	tags: string[];
	createdAt: Date;
	slug: string;
};

export enum SortKey {
	Asc = -1,
	Desc = 1,
}
