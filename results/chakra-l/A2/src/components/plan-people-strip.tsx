import { Avatar, AvatarGroup, HStack, Text } from "@chakra-ui/react";
import type { AuthorModel } from "~/models";

export interface PlanPeopleStripProps {
	/** The accounts involved in this plan, in display order. */
	people: AuthorModel[];
	/** How many avatars to show before collapsing the rest. */
	max?: number;
	/** Rendered after the avatars. */
	caption?: string;
	/** Controls the avatar size. */
	size?: "xs" | "sm" | "md";
}

export function PlanPeopleStrip({ people, max = 4, caption, size = "xs" }: PlanPeopleStripProps) {
	const shown = people.slice(0, max);
	const overflow = people.length - shown.length;
	return (
		<HStack gap="2">
			<AvatarGroup size={size} stacking="last-on-top">
				{shown.map((person) => (
					<Avatar.Root key={person.id} variant="subtle" colorPalette="gray">
						<Avatar.Fallback name={person.displayName} />
						<Avatar.Image src={person.avatarUrl} alt={person.displayName} />
					</Avatar.Root>
				))}
			</AvatarGroup>
			{caption ? (
				<Text fontSize="sm" color="fg.muted">
					{caption}
					{overflow > 0 ? " and " + overflow + " more" : ""}
				</Text>
			) : null}
		</HStack>
	);
}
