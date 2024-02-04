"use client";

import { useState, useEffect } from "react";
import { Flex, Switch, Skeleton } from "@radix-ui/themes";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { ThemeProvider, useTheme } from "next-themes";

enum _Theme {
	Light = "light",
	Dark = "dark",
}

const themeIconMap = Object.freeze({
	[_Theme.Light]: <SunIcon />,
	[_Theme.Dark]: <MoonIcon />,
});

const Toggle = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => setMounted(true), []);

	const toggleTheme = () => {
		setTheme(theme === _Theme.Light ? _Theme.Dark : _Theme.Light);
	};

	if (!mounted) {
		return (
			<Skeleton loading>
				<Flex gap="2" align="center">
					<Switch />
					{themeIconMap[_Theme.Dark]}
				</Flex>
			</Skeleton>
		);
	}

	return (
		<Flex gap="2" align="center">
			<Switch onCheckedChange={toggleTheme} radius="full" />
			{themeIconMap[theme as _Theme]}
		</Flex>
	);
};

const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<ThemeProvider attribute="class" themes={Object.values(_Theme)}>
			{children}
		</ThemeProvider>
	);
};

export const Theme = {
	Provider,
	Toggle,
};
