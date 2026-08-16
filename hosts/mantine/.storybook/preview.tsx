import { MantineProvider } from "@mantine/core";
import type { Preview } from "@storybook/react-vite";

// Mantine ships unstyled without this; the screens are being reviewed visually.
import "@mantine/core/styles.css";

const preview: Preview = {
	decorators: [
		(Story) => (
			<MantineProvider>
				<Story />
			</MantineProvider>
		),
	],
};

export default preview;
