import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { Container, Flex, Theme as RadixTheme } from "@radix-ui/themes";

import * as Theme from "@/components/theme";
import { Header } from "@/components/header";

import "./globals.css";

export const metadata: Metadata = {
	title: "Backuardo's Workbench",
	description: "A collection of patterns and experiments for the web.",
};

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<html lang="en" className={GeistMono.variable} suppressHydrationWarning>
			<body>
				<Theme.Provider>
					<RadixTheme
						accentColor="orange"
						grayColor="olive"
						radius="none"
						scaling="90%"
						panelBackground="translucent"
					>
						<Flex
							direction="column"
							justify="center"
							align="center"
							className="min-h-screen"
						>
							<Container
								size={{
									sm: "2",
									md: "3",
									lg: "4",
								}}
								width="100%"
								className="max-w-screen px-rx-4"
							>
								<Header />
								{children}
							</Container>
						</Flex>
					</RadixTheme>
				</Theme.Provider>
			</body>
		</html>
	);
};

export default RootLayout;
