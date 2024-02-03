import { NextPage } from "next";
import { Card, Flex, Grid, Heading, Separator, Text } from "@radix-ui/themes";
import { CaretRightIcon } from "@radix-ui/react-icons";

import { ExternalLink } from "@/components/ui/external-link";

export const metadata = {
	title: "Tools",
	description: "What I use",
};

const TOOLS = Object.freeze({
	technologies: [
		{
			use: "UI library",
			name: "React",
			link: "https://react.dev",
		},
		{
			use: "Web framework",
			name: "Next.js",
			link: "https://nextjs.org",
		},
		{
			use: "Database",
			name: "Supabase",
			link: "https://supabase.com",
		},
		{
			use: "Hosting",
			name: "Vercel",
			link: "https://vercel.com",
		},
		{
			use: "WebGL library",
			name: "Three.js",
			link: "https://threejs.org",
		},
		{
			use: "WebGL renderer",
			name: "React Three Fiber",
			link: "https://docs.pmnd.rs/react-three-fiber",
		},
		{
			use: "State management",
			name: "Zustand",
			link: "https://zustand-demo.pmnd.rs",
		},
		{
			use: "Component library",
			name: "Radix UI",
			link: "https://radix-ui.com/",
		},
		{
			use: "CSS framework",
			name: "Tailwind CSS",
			link: "https://tailwindcss.com",
		},
	],
	Machine: [
		{
			use: "OS",
			name: "macOS Sonoma",
			link: "https://www.apple.com/macos/",
		},
		{
			use: "Text editor",
			name: "VSCode",
			link: "https://code.visualstudio.com",
		},
		{
			use: "Terminal",
			name: "Hyper",
			link: "https://hyper.is/",
		},
		{
			use: "Shell",
			name: "Fish",
			link: "https://fishshell.com/",
		},
		{
			use: "Font",
			name: "Geist",
			link: "https://vercel.com/font",
		},
		{
			use: "Launcher",
			name: "Raycast",
			link: "https://www.apple.com/macbook-pro/",
		},
	],
});

const Tools: NextPage = async () => {
	return (
		<Flex gap="4" direction="column" my="4">
			<Flex direction="column" gap="3">
				<Heading size="6" className="uppercase">
					Tools
				</Heading>
				<Separator size="4" />
				<Grid columns="2" gap="4">
					{Object.keys(TOOLS).map((key) => {
						return (
							<Card key={key}>
								<Flex direction="column" gap="4">
									<Heading size="5" className="uppercase">
										{key}
									</Heading>
									<Flex direction="column" gap="3">
										{TOOLS[key as keyof typeof TOOLS].map((tool) => {
											return (
												<Flex gap="1" key={tool.name} align="center">
													<CaretRightIcon className="text-gray-10" />
													<Text size="3" className="text-gray-10">
														{tool.use}:
													</Text>
													<ExternalLink href={tool.link} className="font-bold">
														{tool.name}
													</ExternalLink>
												</Flex>
											);
										})}
									</Flex>
								</Flex>
							</Card>
						);
					})}
				</Grid>
			</Flex>
		</Flex>
	);
};

export default Tools;
