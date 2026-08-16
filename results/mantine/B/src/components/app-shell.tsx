import { Box, Container, Group, Stack } from "@mantine/core";
import type { ReactNode } from "react";
import type { Density } from "~/models";
import { gap, pad } from "~/tokens";

export interface AppShellProps {
	/** Slot pinned to the top of the viewport. */
	header: ReactNode;
	/** Slot for the primary column. */
	main: ReactNode;
	/** Slot for the right-hand column. */
	sidebar: ReactNode;
	/** Spacing scale for the whole page. */
	density?: Density;
}

export function AppShell({ header, main, sidebar, density = "cozy" }: AppShellProps) {
	return (
		<Box bg="var(--mantine-color-body)" mih="100vh">
			<Box pos="sticky" top={0} style={{ zIndex: 100 }}>
				{header}
			</Box>
			<Container size="xl" py={pad[density]}>
				<Group align="flex-start" gap={pad[density]} wrap="nowrap">
					<Stack flex={1} miw={0} gap={gap[density]}>
						{main}
					</Stack>
					<Stack w={340} gap={gap[density]} visibleFrom="md">
						{sidebar}
					</Stack>
				</Group>
			</Container>
		</Box>
	);
}
