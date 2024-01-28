import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import {
	Container,
	Flex,
	Grid,
	Theme as RadixTheme,
	// ThemePanel,
} from "@radix-ui/themes";

import * as Theme from "@/components/theme";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

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
						grayColor="sage"
						radius="small"
						scaling="90%"
						panelBackground="solid"
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
								}}
								width="100%"
								className="max-w-screen px-rx-4"
							>
								<Grid rows="auto 1fr auto" className="min-h-screen">
									<Header />
									<main>{children}</main>
									<Footer />
								</Grid>
							</Container>
						</Flex>
						{/* <ThemePanel /> */}
					</RadixTheme>
				</Theme.Provider>
			</body>
		</html>
	);
};

export default RootLayout;
