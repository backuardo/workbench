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
