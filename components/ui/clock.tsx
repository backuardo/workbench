"use client";

import { useEffect, useState } from "react";
import { Flex } from "@radix-ui/themes";
import { ClockIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { format } from "date-fns";

const splitDigits = (time: string) =>
	time
		.split("")
		.map((digit, index) => <AnimatedValue key={index} value={digit} />);

const AnimatedValue = ({ value }: { value: string }) => (
	<motion.span
		key={value}
		initial={{ opacity: 0.25 }}
		animate={{ opacity: 1 }}
		exit={{ opacity: 0.25 }}
		transition={{ type: "spring", stiffness: 100, duration: 0.5 }}
	>
		{value}
	</motion.span>
);

export const Clock: React.FC = () => {
	const [currentTime, setCurrentTime] = useState({
		hours: "00",
		minutes: "00",
		seconds: "00",
		timeZone: "Z",
	});

	useEffect(() => {
		const tick = () => {
			const now = new Date();
			const utcString = now.toISOString();
			const utcDate = new Date(utcString);

			const hours = format(utcDate, "HH");
			const minutes = format(utcDate, "mm");
			const seconds = format(utcDate, "ss");

			setCurrentTime((prevTime) => ({
				hours: hours !== prevTime.hours ? hours : prevTime.hours,
				minutes: minutes !== prevTime.minutes ? minutes : prevTime.minutes,
				seconds: seconds !== prevTime.seconds ? seconds : prevTime.seconds,
				timeZone: "Z",
			}));
		};

		const intervalId = setInterval(tick, 1000);
		return () => clearInterval(intervalId);
	}, []);

	return (
		<Flex className="text-gray-8" align="center" justify="center" gap="1">
			<ClockIcon />
			<Flex>
				{splitDigits(currentTime.hours)}
				{splitDigits(currentTime.minutes)}
				{splitDigits(currentTime.seconds)}
				<AnimatedValue value={currentTime.timeZone} />
			</Flex>
		</Flex>
	);
};
