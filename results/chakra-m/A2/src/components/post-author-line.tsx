import { Badge, HStack, Icon, Span, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";
import type { AuthorModel, Visibility } from "~/models";

const visibilityLabel: Record<Visibility, string> = {
	public: "Public",
	followers: "Followers",
	circle: "Circle",
	unlisted: "Unlisted",
};

const visibilityPalette: Record<Visibility, string> = {
	public: "gray",
	followers: "purple",
	circle: "teal",
	unlisted: "orange",
};

export interface PostAuthorLineProps {
	/** The post's author. */
	author: AuthorModel;
	/** Relative time since the post was created, already formatted (e.g. "2h"). */
	label: string;
	/** Slot for the author's avatar. */
	avatar: ReactNode;
	/** When set, a small badge naming the post's audience is shown. */
	visibility?: Visibility;
}

export function PostAuthorLine({ author, label, avatar, visibility }: PostAuthorLineProps) {
	return (
		<HStack gap="3" align="center">
			{avatar}
			<HStack gap="1.5" minW="0" flexWrap="wrap">
				<Text fontWeight="semibold" truncate>
					{author.displayName}
				</Text>
				{author.verified ? (
					<Icon color="blue.solid" boxSize="4" viewBox="0 0 24 24" aria-label="Verified">
						<path
							d="M12 2.5 14.2 5l3.3-.3.5 3.3 2.8 1.8-1.6 2.9 1.6 2.9-2.8 1.8-.5 3.3-3.3-.3L12 21.5 9.8 19l-3.3.3-.5-3.3-2.8-1.8L4.8 11 3.2 8.2 6 6.4l.5-3.3 3.3.3z"
							fill="currentColor"
						/>
						<path
							d="m8.5 12 2.4 2.4 4.6-4.8"
							fill="none"
							stroke="var(--chakra-colors-blue-contrast)"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</Icon>
				) : null}
				<Text color="fg.muted" truncate>
					@{author.handle}
				</Text>
				<Span color="fg.muted" aria-hidden="true">
					·
				</Span>
				<Text color="fg.muted" whiteSpace="nowrap">
					{label}
				</Text>
				{visibility ? (
					<Badge size="xs" variant="subtle" colorPalette={visibilityPalette[visibility]}>
						{visibilityLabel[visibility]}
					</Badge>
				) : null}
			</HStack>
		</HStack>
	);
}
