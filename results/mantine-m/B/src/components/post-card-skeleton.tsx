import { Card, Group, Skeleton, Stack } from "@mantine/core";

export interface PostCardSkeletonProps {
	/** How many body lines to draw. */
	lines?: number;
	/** Draws a placeholder block where an image would be. */
	withMedia?: boolean;
	/** Turns the shimmer on or off. */
	animate?: boolean;
}

export function PostCardSkeleton({
	lines = 3,
	withMedia = false,
	animate = true,
}: PostCardSkeletonProps) {
	return (
		<Card withBorder radius="md" padding="md">
			<Stack gap="sm">
				<Group gap="sm" wrap="nowrap">
					<Skeleton circle height={40} animate={animate} />
					<Stack gap={6} flex={1}>
						<Skeleton height={10} width="40%" radius="xl" animate={animate} />
						<Skeleton height={8} width="25%" radius="xl" animate={animate} />
					</Stack>
				</Group>
				{Array.from({ length: lines }, (_, index) => (
					<Skeleton
						key={index}
						height={8}
						width={index === lines - 1 ? "60%" : "100%"}
						radius="xl"
						animate={animate}
					/>
				))}
				{withMedia ? <Skeleton height={180} radius="md" animate={animate} /> : null}
			</Stack>
		</Card>
	);
}
