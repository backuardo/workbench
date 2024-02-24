"use client";

import {
	createContext,
	useContext,
	useCallback,
	useState,
	useEffect,
	useMemo,
} from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

import { Theme } from "@/components/theme-context-provider";
import { KEYBOARD_SHORTCUTS, ROUTES } from "@/lib/config";

type UIContextValue = {
	sideMenuOpen: boolean;
	toggleSideMenuOpen: () => void;
	closeSideMenu: () => void;
	theme: Theme;
	toggleTheme: () => void;
	keyboardShortcuts: {
		path?: string;
		name: string;
		key: string;
		action: () => void;
	}[];
};

const UIContext = createContext<UIContextValue>({
	sideMenuOpen: false,
	toggleSideMenuOpen: () => null,
	closeSideMenu: () => null,
	theme: Theme.Light,
	toggleTheme: () => null,
	keyboardShortcuts: [],
});

export const useUI = () => {
	return useContext(UIContext);
};

export const UIContextProvider: React.FC<{
	children: React.ReactNode | React.ReactNode[];
}> = ({ children }) => {
	const router = useRouter();
	const { theme, setTheme } = useTheme();
	const [sideMenuOpen, setSideMenuOpen] = useState(false);

	useEffect(() => {
		ROUTES.forEach(({ path }) => {
			router.prefetch(path);
		});
	}, []);

	const toggleSideMenuOpen = useCallback(() => {
		setSideMenuOpen((prev) => !prev);
	}, [setSideMenuOpen]);

	const closeSideMenu = useCallback(() => {
		setSideMenuOpen(false);
	}, [setSideMenuOpen]);

	const toggleTheme = useCallback(() => {
		setTheme(theme === Theme.Light ? Theme.Dark : Theme.Light);
	}, [setTheme, theme]);

	const keyboardShortcuts = useMemo(() => {
		return KEYBOARD_SHORTCUTS.map(({ path, callbackName, name, key }) => {
			if (path) {
				return {
					path,
					name,
					key,
					action: () => router.push(path),
				};
			} else if (callbackName) {
				switch (callbackName) {
					case "toggleTheme":
						return {
							name,
							key,
							action: toggleTheme,
						};
					case "toggleSideMenuOpen":
						return {
							name,
							key,
							action: toggleSideMenuOpen,
						};
					default:
						return null;
				}
			} else {
				return undefined;
			}
		}).filter(Boolean) as {
			path?: string;
			name: string;
			key: string;
			action: () => void;
		}[];
	}, [toggleTheme, toggleSideMenuOpen, router]);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			// Ignore keyboard shortcuts if the focus is on an input or textarea
			const tagName = document.activeElement?.tagName.toUpperCase();
			if (
				(document.activeElement as HTMLElement).isContentEditable ||
				tagName === "INPUT" ||
				tagName === "TEXTAREA"
			) {
				return;
			}

			const shortcut = keyboardShortcuts.find(
				({ key }) => key.toLowerCase() === e.key.toLowerCase()
			);
			if (shortcut && shortcut.action) {
				e.preventDefault();
				shortcut.action();
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [keyboardShortcuts]);

	return (
		<UIContext.Provider
			value={{
				sideMenuOpen,
				toggleSideMenuOpen,
				closeSideMenu,
				theme: theme as Theme,
				toggleTheme,
				keyboardShortcuts,
			}}
		>
			{children}
		</UIContext.Provider>
	);
};
