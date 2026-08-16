import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import type { Preview } from "@storybook/react-vite";
import React from "react";

const preview: Preview = {
	parameters: {
		layout: "fullscreen",
	},
	decorators: [
		// Chakra v3 takes the system through `value`; there is no `theme` prop as in v2.
		(Story) => (
			<ChakraProvider value={defaultSystem}>
				<Story />
			</ChakraProvider>
		),
	],
};

export default preview;
