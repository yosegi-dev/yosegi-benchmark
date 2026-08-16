import { cn } from "~/lib/utils";
import type { AuthorModel } from "~/models";
import { Avatar, AvatarFallback, AvatarImage } from "~/ui/avatar";

const sizeStyles = {
	sm: "h-6 w-6 text-[10px]",
	md: "h-8 w-8 text-xs",
	lg: "h-10 w-10 text-sm",
};

export interface UserAvatarGroupProps {
	users: AuthorModel[];
	/** Avatars shown before the overflow counter takes over. */
	max?: number;
	size?: "sm" | "md" | "lg";
	onClick?: () => void;
}

export function UserAvatarGroup({
	users,
	max = 3,
	size = "md",
	onClick,
}: UserAvatarGroupProps) {
	const shown = users.slice(0, max);
	const overflow = users.length - shown.length;

	return (
		<div className="flex items-center -space-x-2" onClick={onClick}>
			{shown.map((user) => (
				<Avatar key={user.id} className={cn("ring-2 ring-background", sizeStyles[size])}>
					<AvatarImage src={user.avatarUrl} alt={user.displayName} />
					<AvatarFallback>{user.displayName.charAt(0)}</AvatarFallback>
				</Avatar>
			))}
			{overflow > 0 ? (
				<span
					className={cn(
						"flex items-center justify-center rounded-full bg-muted font-medium ring-2 ring-background",
						sizeStyles[size],
					)}
				>
					+{overflow}
				</span>
			) : null}
		</div>
	);
}
