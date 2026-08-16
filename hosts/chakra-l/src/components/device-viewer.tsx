import { AspectRatio, Box, Float, Icon, IconButton, Image, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";

export interface DeviceViewerProps {
	/** The device asset to display. */
	source: { url: string; alt: string };
	/** Width divided by height. */
	ratio?: number;
	/** Rendered over the bottom of the frame. */
	overlay?: ReactNode;
	/** When set, a close button is drawn in the corner. */
	onClose?: () => void;
}

export function DeviceViewer({ source, ratio = 16 / 9, overlay, onClose }: DeviceViewerProps) {
	return (
		<Box position="relative" borderRadius="l2" overflow="hidden">
			<AspectRatio ratio={ratio}>
				<Image src={source.url} alt={source.alt} objectFit="cover" bg="bg.muted" />
			</AspectRatio>
			{overlay ? (
				<Box position="absolute" insetX="0" bottom="0" bg="bg/80" px="3" py="2">
					<Text fontSize="sm">{overlay}</Text>
				</Box>
			) : null}
			{onClose ? (
				<Float placement="top-end" offsetX="3" offsetY="3">
					<IconButton aria-label="Close" size="xs" variant="solid" onClick={onClose}>
						<Icon viewBox="0 0 24 24" boxSize="4">
							<path
								d="M6 6l12 12M18 6 6 18"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
							/>
						</Icon>
					</IconButton>
				</Float>
			) : null}
		</Box>
	);
}
