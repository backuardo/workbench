import * as Theme from "@radix-ui/themes";

export const ROUTES = Object.freeze([
	{ path: "/", name: "Index" },
	{ path: "/about", name: "About" },
	{ path: "/contact", name: "Contact" },
	{ path: "/workbench", name: "Workbench" },
]);

export const KEYBOARD_SHORTCUTS: readonly {
	path?: string;
	callbackName?: string;
	name: string;
	key: string;
}[] = Object.freeze([
	{ path: "/", name: " Navigate to /Index", key: "I" },
	{ path: "/about", name: " Navigate to /About", key: "A" },
	{ path: "/contact", name: " Navigate to /Contact", key: "C" },
	{
		path: "/workbench",
		name: " Navigate to /Workbench",
		key: "W",
	},
	{ callbackName: "toggleTheme", name: "Toggle Theme", key: "T" },
	{
		callbackName: "toggleSideMenuOpen",
		name: "Toggle Side Menu",
		key: "M",
	},
]);

export const THEME: Partial<Theme.ThemeOptions> = Object.freeze({
	accentColor: "tomato",
	// grayColor: "olive",
	radius: "none",
	scaling: "90%",
	panelBackground: "translucent",
});

export const VERSION = "2.0.1";

export const BASE_URL = "https://beneisner.io";
