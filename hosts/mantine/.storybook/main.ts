import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import type { StorybookConfig } from "@storybook/react-vite";

const hostRoot = join(dirname(fileURLToPath(import.meta.url)), "..");

const config: StorybookConfig = {
	framework: "@storybook/react-vite",
	stories: ["../src/**/*.stories.tsx"],
	viteFinal: (viteConfig) => ({
		...viteConfig,
		resolve: {
			...viteConfig.resolve,
			alias: {
				...viteConfig.resolve?.alias,
				// The host tsconfig declares `~/*` -> `./src/*`, but Vite does not read
				// tsconfig paths, and the generated stories import through the alias.
				"~": join(hostRoot, "src"),
			},
		},
	}),
};

export default config;
