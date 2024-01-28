"use client";

import { useState, useEffect } from "react";
import { Flex, Switch, Skeleton } from "@radix-ui/themes";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { ThemeProvider, useTheme } from "next-themes";

enum Theme {
	Light = "light",
	Dark = "dark",
}

const themeIconMap = Object.freeze({
	[Theme.Light]: <SunIcon />,
	[Theme.Dark]: <MoonIcon />,
});

export const Toggle = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => setMounted(true), []);

	const toggleTheme = () => {
		setTheme(theme === Theme.Light ? Theme.Dark : Theme.Light);
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
