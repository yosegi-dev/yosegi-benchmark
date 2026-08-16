import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import type { StorybookConfig } from "@storybook/react-vite";
import tailwindcss from "@tailwindcss/vite";

const hostRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const config: StorybookConfig = {
	stories: ["../src/**/*.stories.tsx"],
	framework: {
		name: "@storybook/react-vite",
		options: {},
	},
	viteFinal: async (viteConfig) => {
		// The host tsconfig declares `~/*` -> `./src/*`, but Vite does not read tsconfig
		// paths, and the generated stories import through `~`.
		viteConfig.resolve = {
			...viteConfig.resolve,
			alias: {
				...viteConfig.resolve?.alias,
				"~": resolve(hostRoot, "src"),
			},
		};
		viteConfig.plugins = [...(viteConfig.plugins ?? []), tailwindcss()];
		return viteConfig;
	},
};

export default config;
