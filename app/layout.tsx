import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { Container, Flex, Grid } from "@radix-ui/themes";

import { AppContextProvider } from "@/components/app-context-provider";
import { Analytics } from "@/components/analytics";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

import "./globals.css";

export const generateMetadata = async (): Promise<Metadata> => {
	return {
		title: {
			template: "%s | beneisner.io",
			default: "beneisner.io",
		},
	};
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
				<Analytics />
			</body>
		</html>
	);
};

export default RootLayout;
