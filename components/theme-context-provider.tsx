"use client";

import { ThemeProvider } from "next-themes";

export enum Theme {
	Light = "light",
	Dark = "dark",
}

export const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return (
		<ThemeProvider
			attribute="class"
			storageKey="backuardo-theme"
			themes={Object.values(Theme)}
		>
			{children}
		</ThemeProvider>
	);
};
