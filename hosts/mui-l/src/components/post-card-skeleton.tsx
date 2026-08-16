import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export interface PostCardSkeletonProps {
	/** Body placeholder lines to draw. */
	lines?: number;
	/** Overall scale of the placeholder. */
	size?: "sm" | "md" | "lg";
	/** Draws a media placeholder under the body. */
	showMedia?: boolean;
	/** Number of stacked placeholder cards. */
	repeat?: number;
}

const AVATAR_PX = { sm: 28, md: 40, lg: 48 };

export function PostCardSkeleton({ lines = 2, size = "md", showMedia = false, repeat = 1 }: PostCardSkeletonProps) {
	const px = AVATAR_PX[size];
	return (
		<Stack spacing={1} aria-busy aria-live="polite">
			{Array.from({ length: repeat }, (_, index) => (
				<Card key={index} variant="outlined" sx={{ borderRadius: 3, p: 2 }}>
					<Stack direction="row" spacing={1.5} sx={{ alignItems: "flex-start" }}>
						<Skeleton variant="circular" width={px} height={px} />
						<Box sx={{ flex: 1 }}>
							<Skeleton variant="text" width="40%" />
							{Array.from({ length: lines }, (_, line) => (
								<Skeleton key={line} variant="text" width={line === lines - 1 ? "70%" : "100%"} />
							))}
							{showMedia ? (
								<Skeleton variant="rectangular" height={160} sx={{ borderRadius: 2, mt: 1 }} />
							) : null}
						</Box>
					</Stack>
				</Card>
			))}
		</Stack>
	);
}
