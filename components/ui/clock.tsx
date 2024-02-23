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
	const [zuluTime, setZuluTime] = useState({
		hours: "00",
		minutes: "00",
		seconds: "00",
		timeZone: "Z",
	});

	useEffect(() => {
		const tick = () => {
			const now = new Date();
			const zuluDate = new Date(
				now.getTime() + now.getTimezoneOffset() * 60000
			);
			const hours = format(zuluDate, "HH");
			const minutes = format(zuluDate, "mm");
			const seconds = format(zuluDate, "ss");

			setZuluTime((prevTime) => ({
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
		<Flex
			className="text-gray-8 select-none text-1"
			align="center"
			justify="center"
			gap="1"
		>
			<ClockIcon height={12} width={12} />
			<Flex>
				{splitDigits(zuluTime.hours)}
				{splitDigits(zuluTime.minutes)}
				{splitDigits(zuluTime.seconds)}
				<AnimatedValue value={zuluTime.timeZone} />
			</Flex>
		</Flex>
	);
};
