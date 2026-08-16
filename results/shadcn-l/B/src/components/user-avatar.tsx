import { densityAvatar } from "~/lib/density";
import { cn } from "~/lib/utils";
import type { AuthorModel, Density } from "~/models";
import { Avatar, AvatarFallback, AvatarImage } from "~/ui/avatar";

export interface UserAvatarProps {
	/** The image and the fallback initials are both derived from this model. */
	author: AuthorModel;
	/** Spacing scale, which here selects the avatar size. */
	density?: Density;
}

function initialsOf(displayName: string): string {
	return displayName
		.split(/\s+/)
		.slice(0, 2)
		.map((part) => part.charAt(0).toUpperCase())
		.join("");
}

export function UserAvatar({ author, density = "cozy" }: UserAvatarProps) {
	return (
		<Avatar className={cn(densityAvatar[density])}>
			<AvatarImage src={author.avatarUrl} alt={author.displayName} />
			<AvatarFallback>{initialsOf(author.displayName)}</AvatarFallback>
		</Avatar>
	);
}
