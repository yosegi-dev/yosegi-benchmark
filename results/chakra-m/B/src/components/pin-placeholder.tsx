import { HStack, Skeleton, SkeletonCircle, SkeletonText, Stack } from "@chakra-ui/react";

export interface PinPlaceholderProps {
	/** How many pin rows to fake. */
	rows?: number;
	/** Reserves a circle where the avatar would go. */
	showAvatar?: boolean;
	/** Reserves a block where an attachment would go. */
	showMedia?: boolean;
}

export function PinPlaceholder({ rows = 3, showAvatar = true, showMedia = false }: PinPlaceholderProps) {
	return (
		<Stack gap="3">
			<HStack gap="3">
				{showAvatar ? <SkeletonCircle size="8" /> : null}
				<SkeletonText noOfLines={1} width="30%" />
			</HStack>
			<SkeletonText noOfLines={rows} gap="2" />
			{showMedia ? <Skeleton height="40" borderRadius="l2" /> : null}
		</Stack>
	);
}
