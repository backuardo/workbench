import * as Theme from "@radix-ui/themes";

export const ROUTES = Object.freeze([
	{ path: "/", name: "Index" },
	{ path: "/about", name: "About" },
	{ path: "/workbench", name: "Workbench" },
]);

export const THEME: Partial<Theme.ThemeOptions> = Object.freeze({
	accentColor: "tomato",
	grayColor: "mauve",
	radius: "none",
	scaling: "90%",
	panelBackground: "translucent",
});

export const VERSION = "2.0.1";

export const BASE_URL = "https://beneisner.io";
