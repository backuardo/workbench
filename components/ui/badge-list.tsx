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
						variant="surface"
						highContrast
						className={cn("uppercase", className)}
					>
						{tag}
					</Badge>
				</Box>
			))}
		</Flex>
	);
};
