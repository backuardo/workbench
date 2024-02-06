"use client";

import { useState, useEffect } from "react";
import { Flex, Switch, Skeleton } from "@radix-ui/themes";
import { EyeOpenIcon, EyeClosedIcon } from "@radix-ui/react-icons";
import { ThemeProvider, useTheme } from "next-themes";
import analytics from "@vercel/analytics";

enum Theme {
	Light = "light",
	Dark = "dark",
}

const themeIconMap = Object.freeze({
	[Theme.Light]: <EyeOpenIcon />,
	[Theme.Dark]: <EyeClosedIcon />,
});

export const Toggle = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => setMounted(true), []);

	const toggleTheme = () => {
		setTheme(theme === Theme.Light ? Theme.Dark : Theme.Light);
		analytics.track("toggle theme");
	};

	if (!mounted) {
		return (
			<Skeleton loading>
				<Flex gap="2" align="center">
					<Switch />
					{themeIconMap[Theme.Dark]}
				</Flex>
			</Skeleton>
		);
	}

	return (
		<Flex gap="2" align="center">
			<Switch onCheckedChange={toggleTheme} />
			{themeIconMap[theme as Theme]}
		</Flex>
	);
};

export const Provider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return (
		<ThemeProvider attribute="class" themes={Object.values(Theme)}>
			{children}
		</ThemeProvider>
	);
};
