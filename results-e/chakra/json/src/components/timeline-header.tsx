import { Avatar, Box, Container, Flex, HStack, Heading, chakra } from "@chakra-ui/react";
import type { ReactNode } from "react";
import type { AuthorModel } from "~/models";

export interface TimelineHeaderProps {
	/** The signed-in user, shown as the avatar button on the left. */
	viewer: AuthorModel;
	/** Slot for the search field. */
	search: ReactNode;
	/** Slot for the notification bell. */
	notifications: ReactNode;
	/** Fired when the viewer's own avatar is activated. */
	onViewerPress?: () => void;
}

export function TimelineHeader({
	viewer,
	search,
	notifications,
	onViewerPress,
}: TimelineHeaderProps) {
	return (
		<Container maxW="6xl" px="5">
			<Flex align="center" gap="4" h="16">
				<HStack gap="3" flexShrink="0">
					<chakra.button
						type="button"
						onClick={onViewerPress}
						borderRadius="full"
						cursor="pointer"
						aria-label={viewer.displayName}
						_focusVisible={{ outline: "2px solid", outlineColor: "colorPalette.focusRing" }}
					>
						<Avatar.Root size="sm" variant="subtle" colorPalette="gray">
							<Avatar.Fallback name={viewer.displayName} />
							<Avatar.Image src={viewer.avatarUrl} alt={viewer.displayName} />
						</Avatar.Root>
					</chakra.button>
					<Heading size="md" hideBelow="sm">
						Home
					</Heading>
				</HStack>
				<Box flex="1" minW="0">
					{search}
				</Box>
				<Box flexShrink="0">{notifications}</Box>
			</Flex>
		</Container>
	);
}
