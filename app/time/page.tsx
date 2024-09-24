import { NextPage } from "next";
import {
	differenceInYears,
	differenceInMonths,
	differenceInDays,
	addYears,
	addMonths,
} from "date-fns";
import { Badge, Flex, Heading } from "@radix-ui/themes";

import { Section } from "@/components/layout/section";
import { P } from "@/components/ui/typography";
import { DAY_ONE } from "@/lib/config";

const calculateTimeSince = (startDate: Date, endDate: Date = new Date()) => {
	// Calculate full years since startDate
	const years = differenceInYears(endDate, startDate);

	// Add the full years back to the startDate and calculate remaining months
	const months = differenceInMonths(endDate, addYears(startDate, years));

	// Add the full months back to the startDate (with years included) and calculate remaining days
	const days = differenceInDays(
		endDate,
		addMonths(addYears(startDate, years), months)
	);

	return { years, months, days };
};

export const metadata = {
	title: "TIME",
	description: "TIME",
};

const Time: NextPage = async () => {
	const { years, months, days } = calculateTimeSince(DAY_ONE);
	return (
		<Section.Container>
			<Section.Heading title="It has been..." />
			<Section.Content>
				<Flex
					width="100%"
					align="center"
					justify="center"
					style={{ height: "60vh" }}
					direction="column"
				>
					<Heading weight="bold" className="uppercase" size="8">
						{years > 0 && `${years} year${years !== 1 ? "s" : ""}, `}
						{months > 0 && `${months} month${months !== 1 ? "s" : ""}, `}
						{days} day{days !== 1 && "s"}
					</Heading>
					<Badge>
						<Heading weight="bold" className="uppercase" size="3">
							(or {differenceInDays(new Date(), DAY_ONE)} days)
						</Heading>
					</Badge>
				</Flex>
			</Section.Content>
		</Section.Container>
	);
};

export default Time;
