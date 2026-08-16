import { Box, Container, Grid, GridItem } from "@chakra-ui/react";
import type { ReactNode } from "react";
import type { Density } from "~/models";

const shellGap = {
	compact: "4",
	cozy: "6",
	roomy: "10",
} as const;

const shellPadding = {
	compact: "3",
	cozy: "5",
	roomy: "8",
} as const;

export interface AppShellProps {
	/** Rendered above the columns, sticky to the top of the viewport. */
	header: ReactNode;
	/** The primary column: feed tabs, composer, post cards. */
	main: ReactNode;
	/** The right-hand column: trends and suggestions. */
	sidebar: ReactNode;
	/** Controls the page gutter and the gap between the two columns. */
	density?: Density;
}

export function AppShell({ header, main, sidebar, density = "cozy" }: AppShellProps) {
	return (
		<Box minH="100vh" bg="bg.subtle" color="fg">
			<Box position="sticky" top="0" zIndex="docked" bg="bg" borderBottomWidth="1px">
				{header}
			</Box>
			<Container maxW="6xl" px={shellPadding[density]} py={shellPadding[density]}>
				<Grid templateColumns={{ base: "1fr", md: "minmax(0, 1fr) 20rem" }} gap={shellGap[density]}>
					<GridItem minW="0">{main}</GridItem>
					<GridItem
						as="aside"
						minW="0"
						display={{ base: "none", md: "block" }}
						position="sticky"
						top="20"
						alignSelf="start"
					>
						{sidebar}
					</GridItem>
				</Grid>
			</Container>
		</Box>
	);
}
