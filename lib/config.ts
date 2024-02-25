import * as Theme from "@radix-ui/themes";
import { Key } from "ts-key-enum";

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
	display: string;
}[] = Object.freeze([
	// { path: "/workbench", name: "Shortcut menu", key: "?" }, // why doesnt this work?
	{ path: "/", name: "Navigate to /Index", key: "i", display: "i" },
	{
		callbackName: "navigateNextPage",
		name: "Navigate to next page",
		key: "ArrowRight",
		display: "→",
	},
	{
		callbackName: "navigatePreviousPage",
		name: "Navigate to previous page",
		key: "ArrowLeft",
		display: "←",
	},
	{ callbackName: "toggleTheme", name: "Toggle Theme", key: "t", display: "t" },
	{
		callbackName: "toggleMenuOpen",
		name: "Toggle Menu",
		key: "m",
		display: "m",
	},
]);

export const THEME: Partial<Theme.ThemeOptions> = Object.freeze({
	accentColor: "bronze", // teal indigo red tomato orange bronze gold
	grayColor: "sage", // sage olive
	radius: "none",
	scaling: "90%",
	panelBackground: "translucent",
});

export const VERSION = "2.0.1";

export const BASE_URL = "https://beneisner.io";
