"use client";

import { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { Button, Flex, Heading } from "@radix-ui/themes";

import "./globals.css";

export const metadata: Metadata = {
	title: "Error",
	description: "Something went wrong",
};

const GlobalError = ({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) => {
	return (
		<html lang="en" className={GeistMono.variable} suppressHydrationWarning>
			<body>
				<Flex direction="column" align="center" justify="center" gap="4">
					<Heading as="h1" size="8" weight="bold" className="uppercase">
						Something went wrong
					</Heading>
					<Button onClick={() => reset()}>Try again</Button>
				</Flex>
			</body>
		</html>
	);
};

export default GlobalError;
