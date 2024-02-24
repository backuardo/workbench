import * as Theme from "@radix-ui/themes";

export const ROUTES = Object.freeze([
	{ path: "/", name: "Index" },
	{ path: "/about", name: "About" },
	{ path: "/contact", name: "Contact" },
	{ path: "/workbench", name: "Workbench" },
]);

export const KEYBOARD_SHORTCUTS = Object.freeze([
	{ path: "/", name: " Navigate to /Index", keyboardShortcut: "I" },
	{ path: "/about", name: " Navigate to /About", keyboardShortcut: "A" },
	{ path: "/contact", name: " Navigate to /Contact", keyboardShortcut: "C" },
	{
		path: "/workbench",
		name: " Navigate to /Workbench",
		keyboardShortcut: "W",
	},
	{ callback: "toggleTheme", name: "Toggle Theme", keyboardShortcut: "T" },
	{
		callback: "toggleSideMenu",
		name: "Toggle Side Menu",
		keyboardShortcut: "M",
	},
	{
		callback: "toggleHelpModal",
		name: "Toggle Help Modal",
		keyboardShortcut: "?",
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
