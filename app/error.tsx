"use client";

import { Metadata } from "next";
import { Button, Flex, Heading } from "@radix-ui/themes";

export const metadata: Metadata = {
	title: "Error",
	description: "Something went wrong",
};

const Error = ({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) => {
	return (
		<Flex
			direction="column"
			align="center"
			justify="center"
			gap="4"
			height="100%"
		>
			<Heading as="h1" size="6" weight="bold">
				Something went wrong
			</Heading>
			<Button onClick={() => reset()} radius="full">
				Try again
			</Button>
		</Flex>
	);
};

export default Error;
