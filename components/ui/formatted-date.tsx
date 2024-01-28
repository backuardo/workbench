import { Text } from "@radix-ui/themes";
import { format } from "date-fns";

import { cn } from "@/lib/cn";

export const FormattedDate: React.FC<{
	date: Date;
	formatString?: string;
	className?: string;
}> = ({ date, formatString = "MMM do, y", className = "" }) => {
	return (
		<Text size="1" weight="bold" className={cn("text-accent-11", className)}>
			{format(date, formatString)}
		</Text>
	);
};
