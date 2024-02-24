"use client";

import { Flex, Switch, Skeleton } from "@radix-ui/themes";
import { EyeOpenIcon, EyeClosedIcon } from "@radix-ui/react-icons";

import { Theme } from "@/components/theme-context-provider";
import { useUI } from "@/components/ui-context-provider";
import { useIsClient } from "@/lib/use-is-client";

const themeIconMap = Object.freeze({
	[Theme.Light]: <EyeOpenIcon />,
	[Theme.Dark]: <EyeClosedIcon />,
});

export const ThemeToggle = () => {
	const isClient = useIsClient();
	const { theme, toggleTheme } = useUI();

	if (!isClient) {
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
			<Switch
				checked={theme === Theme.Dark}
				onCheckedChange={toggleTheme}
				variant="surface"
			/>
			{themeIconMap[theme as Theme]}
		</Flex>
	);
};
