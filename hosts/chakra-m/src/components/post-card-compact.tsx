import { Avatar, Card, HStack, Stack, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";

const cardSize = {
	sm: "sm",
	md: "md",
	lg: "lg",
} as const;

export interface PostCardCompactProps {
	/** Display name shown first on the author line. */
	authorName: string;
	/** Handle without the leading "@". */
	handle: string;
	/** Absolute URL of the author's avatar. */
	avatarUrl: string;
	/** The post text. */
	body: string;
	/** Already-formatted timestamp, e.g. "2h". */
	timestamp: string;
	/** Controls the card padding. */
	size?: "sm" | "md" | "lg";
	/** Rendered below the body — attachments, action rows, anything trailing. */
	children?: ReactNode;
	/** Fired when the card itself is activated. */
	onClick?: () => void;
}

export function PostCardCompact({
	authorName,
	handle,
	avatarUrl,
	body,
	timestamp,
	size = "md",
	children,
	onClick,
}: PostCardCompactProps) {
	return (
		<Card.Root size={cardSize[size]} variant="outline" onClick={onClick}>
			<Card.Body>
				<HStack gap="2" align="start">
					<Avatar.Root size="xs" variant="subtle" colorPalette="gray">
						<Avatar.Fallback name={authorName} />
						<Avatar.Image src={avatarUrl} alt={authorName} />
					</Avatar.Root>
					<Stack gap="1" flex="1" minW="0">
						<HStack gap="1.5" minW="0">
							<Text fontWeight="semibold" fontSize="sm" truncate>
								{authorName}
							</Text>
							<Text color="fg.muted" fontSize="sm" truncate>
								@{handle}
							</Text>
							<Text color="fg.muted" fontSize="sm" whiteSpace="nowrap">
								{timestamp}
							</Text>
						</HStack>
						<Text fontSize="sm" whiteSpace="pre-wrap" wordBreak="break-word">
							{body}
						</Text>
						{children}
					</Stack>
				</HStack>
			</Card.Body>
		</Card.Root>
	);
}
