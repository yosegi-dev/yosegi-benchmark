import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import type { ReactNode } from "react";
import { gapUnits, padUnits } from "~/internal/tokens";
import type { Density } from "~/models";

export interface AppShellProps {
	/** Rendered above both columns, pinned to the top of the viewport. */
	header: ReactNode;
	/** The primary column. */
	main: ReactNode;
	/** The secondary column, shown to the right of `main` on wide viewports. */
	sidebar: ReactNode;
	/** Spacing scale applied to the whole page. */
	density?: Density;
}

export function AppShell({ header, main, sidebar, density = "cozy" }: AppShellProps) {
	return (
		<Box sx={{ bgcolor: "background.default", color: "text.primary", minHeight: "100vh" }}>
			<Box
				component="header"
				sx={{
					position: "sticky",
					top: 0,
					zIndex: (theme) => theme.zIndex.appBar,
					bgcolor: "background.paper",
					borderBottom: 1,
					borderColor: "divider",
				}}
			>
				{header}
			</Box>
			<Container maxWidth="lg" sx={{ py: padUnits(density) }}>
				<Stack
					direction={{ xs: "column", md: "row" }}
					spacing={gapUnits(density) * 2}
					sx={{ alignItems: "flex-start" }}
				>
					<Box component="main" sx={{ flex: 1, minWidth: 0, width: "100%" }}>
						{main}
					</Box>
					<Box
						component="aside"
						sx={{
							width: { xs: "100%", md: 320 },
							flexShrink: 0,
							position: { md: "sticky" },
							top: { md: 88 },
						}}
					>
						{sidebar}
					</Box>
				</Stack>
			</Container>
		</Box>
	);
}
