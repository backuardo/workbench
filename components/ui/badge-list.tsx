import { Badge, Box, Flex } from "@radix-ui/themes";

import { cn } from "@/lib/cn";

export const BadgeList: React.FC<{ labels: string[]; className?: string }> = ({
	labels,
	className = "",
}) => {
	return (
		<Flex gap="2">
			{labels.map((tag) => (
				<Box key={tag}>
					<Badge
						variant="soft"
						className={cn("uppercase leading-1 pt-[0.15rem]", className)}
					>
						{tag}
					</Badge>
				</Box>
			))}
		</Flex>
	);
};
