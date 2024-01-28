import type { Config } from "tailwindcss";
import { radixThemePreset } from "radix-themes-tw";

const config: Config = {
	darkMode: "class",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			borderWidth: {
				1: "1px",
			},
			fontFamily: {
				mono: ["var(--font-geist-mono)"],
			},
		},
	},
	plugins: [],
	presets: [radixThemePreset],
};
export default config;
