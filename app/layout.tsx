import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { Container, Flex, Grid } from "@radix-ui/themes";

import { AppContextProvider } from "@/components/app-context-provider";
import { Analytics } from "@/components/layout/analytics";
import { SpeedInsights } from "@/components/layout/speed-insights";
import { Menu } from "@/components/layout/menu";
import { Footer } from "@/components/layout/footer";

import "./globals.css";

export const generateMetadata = async (): Promise<Metadata> => {
	return {
		metadataBase: new URL("https://beneisner.io"),
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
			<body className="overflow-y-auto">
				<AppContextProvider>
					<Flex
						direction="column"
						justify="center"
						align="center"
						className="min-h-screen border-1 border-dashed border-gray-5"
					>
						<Flex className="border-gray-5 border-x-1 border-dashed">
							<Container size="2" width="100%" className="max-w-screen">
								<Grid rows="auto 1fr auto" className="min-h-screen">
									<Menu />
									<main>{children}</main>
									<Footer />
								</Grid>
							</Container>
						</Flex>
					</Flex>
				</AppContextProvider>
				<SpeedInsights />
				<Analytics />
			</body>
		</html>
	);
};

export default RootLayout;
