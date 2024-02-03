import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { Container, Flex, Grid } from "@radix-ui/themes";

import { AppContextProvider } from "@/components/app-context-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

import "./globals.css";

export const metadata: Metadata = {
	title: "beneisner.io",
	description: "",
};

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<html lang="en" className={GeistMono.variable} suppressHydrationWarning>
			<body>
				<AppContextProvider>
					<Flex
						direction="column"
						justify="center"
						align="center"
						className="min-h-screen"
					>
						<Container
							size={{
								sm: "2",
								// md: "3",
							}}
							width="100%"
							className="max-w-screen px-rx-4 bg-gray-1"
						>
							<Grid rows="auto 1fr auto" className="min-h-screen">
								<Header />
								<main>{children}</main>
								<Footer />
							</Grid>
						</Container>
					</Flex>
				</AppContextProvider>
			</body>
		</html>
	);
};

export default RootLayout;
