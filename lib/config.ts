import * as Theme from "@radix-ui/themes";
import {
	XLogo,
	GithubLogo,
	LinkedinLogo,
	Envelope,
} from "@phosphor-icons/react/dist/ssr";

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
	{ path: "/", name: "Navigate to /index", key: "i", display: "i" },
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
	// { callbackName: "toggleTheme", name: "Toggle theme", key: "t", display: "t" },
	{
		callbackName: "toggleMenuOpen",
		name: "Toggle menu visibility",
		key: "m",
		display: "m",
	},
]);

export const THEME: Partial<Theme.ThemeOptions> = Object.freeze({
	accentColor: "gray",
	grayColor: "olive",
	radius: "none",
	scaling: "90%",
	panelBackground: "translucent",
});

export const CONTACT = Object.freeze({
	x: {
		name: "X",
		url: "https://x.com/backuardo",
		handle: "@backuardo",
		Icon: XLogo,
	},
	linkedIn: {
		name: "LinkedIn",
		url: "https://www.linkedin.com/in/ben-eisner",
		handle: "ben-eisner",
		Icon: LinkedinLogo,
	},
	github: {
		name: "GitHub",
		url: "https://github.com/backuardo",
		handle: "backuardo",
		Icon: GithubLogo,
	},
	email: {
		name: "Email",
		url: "mailto:ben@beneisner.io",
		handle: "ben@beneisner.io",
		Icon: Envelope,
	},
});

export const VERSION = "2.0.4";

export const BASE_URL = "https://beneisner.io";
