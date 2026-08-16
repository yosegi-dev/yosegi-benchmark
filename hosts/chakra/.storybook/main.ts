import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import type { StorybookConfig } from "@storybook/react-vite";

const hostRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const config: StorybookConfig = {
	framework: "@storybook/react-vite",
	stories: ["../src/**/*.stories.tsx"],
	// `@chakra-ui/react`'s package.json carries a `storybook` field, which Storybook
	// auto-composes into a ref pointing at storybook.chakra-ui.com. Drop it: the sidebar
	// should hold the three screens under review, not the vendor's whole catalogue.
	refs: { "@chakra-ui/react": { disable: true } },
	viteFinal: async (viteConfig) => {
		// The host tsconfig declares `~/*` -> `./src/*`, but Vite does not read tsconfig
		// paths, and the generated screens import through `~`.
		viteConfig.resolve = {
			...viteConfig.resolve,
			alias: {
				...viteConfig.resolve?.alias,
				"~": resolve(hostRoot, "src"),
			},
		};
		return viteConfig;
	},
};

export default config;
