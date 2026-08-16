import { Card, HStack, SkeletonCircle, SkeletonText, Stack, Skeleton } from "@chakra-ui/react";

const cardSize = {
	sm: "sm",
	md: "md",
	lg: "lg",
} as const;

export interface PostCardSkeletonProps {
	/** How many body lines to fake before the media block. */
	lines?: number;
	/** Reserves a 16:9 block where the attachment would go. */
	showMedia?: boolean;
	/** Controls the card padding. */
	size?: "sm" | "md" | "lg";
}

export function PostCardSkeleton({ lines = 3, showMedia = false, size = "md" }: PostCardSkeletonProps) {
	return (
		<Card.Root size={cardSize[size]} variant="outline">
			<Card.Body>
				<Stack gap="3">
					<HStack gap="3">
						<SkeletonCircle size="10" />
						<SkeletonText noOfLines={1} width="40%" />
					</HStack>
					<SkeletonText noOfLines={lines} gap="2" />
					{showMedia ? <Skeleton height="48" borderRadius="l2" /> : null}
				</Stack>
			</Card.Body>
		</Card.Root>
	);
}
