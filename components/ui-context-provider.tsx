"use client";

import {
	createContext,
	useContext,
	useCallback,
	useState,
	useEffect,
	useMemo,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { HotkeyCallback, Keys, Options, useHotkeys } from "react-hotkeys-hook";

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

export const KeyboardShortcutUtility: React.FC<{
	keys: Keys;
	callback: HotkeyCallback;
	options?: Options;
	deps?: unknown[];
}> = ({ keys, callback, options, deps }) => {
	useHotkeys(keys, callback, options, deps);
	return null;
};

export const UIContextProvider: React.FC<{
	children: React.ReactNode | React.ReactNode[];
}> = ({ children }) => {
	const router = useRouter();
	const pathname = usePathname();
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

	const currentRouteIndex = useMemo(() => {
		return ROUTES.findIndex(({ path }) => path === pathname);
	}, [pathname]);

	const navigateNextPage = useCallback(() => {
		const nextRouteIndex = (currentRouteIndex + 1) % ROUTES.length;
		const nextRoute = ROUTES[nextRouteIndex];
		router.push(nextRoute.path, {});
	}, [pathname]);

	const navigatePreviousPage = useCallback(() => {
		const nextRouteIndex =
			(currentRouteIndex - 1 + ROUTES.length) % ROUTES.length;
		const nextRoute = ROUTES[nextRouteIndex];
		router.push(nextRoute.path, {});
	}, [pathname]);

	const keyboardShortcuts = useMemo(() => {
		return KEYBOARD_SHORTCUTS.map(({ path, callbackName, name, key }) => {
			if (path) {
				return {
					path,
					key,
					action: () => router.push(path),
				};
			} else if (callbackName) {
				switch (callbackName) {
					case "toggleTheme":
						return {
							key,
							action: toggleTheme,
						};
					case "toggleMenuOpen":
						return {
							key,
							action: toggleSideMenuOpen,
						};
					case "navigatePreviousPage":
						return {
							key,
							action: navigatePreviousPage,
							deps: [pathname],
						};
					case "navigateNextPage":
						return {
							key,
							action: navigateNextPage,
							deps: [pathname],
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
			deps?: unknown[];
			action: () => void;
		}[];
	}, [toggleTheme, toggleSideMenuOpen, router, pathname]);

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
			{keyboardShortcuts.map(({ key, action, deps }) => (
				<KeyboardShortcutUtility
					key={key}
					keys={key}
					callback={action}
					deps={deps}
				/>
			))}
			{children}
		</UIContext.Provider>
	);
};
