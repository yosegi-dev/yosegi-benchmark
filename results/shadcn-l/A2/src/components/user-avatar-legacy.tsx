import { cn } from "~/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "~/ui/avatar";

const sizeStyles = {
	sm: "h-6 w-6 text-[10px]",
	md: "h-9 w-9 text-xs",
	lg: "h-12 w-12 text-sm",
};

export interface UserAvatarLegacyProps {
	src: string;
	/** Used for the alt text and for the fallback initial. */
	name: string;
	size?: "sm" | "md" | "lg";
	/** Draws the online dot in the bottom-right corner. */
	showBadge?: boolean;
}

export function UserAvatarLegacy({
	src,
	name,
	size = "md",
	showBadge = false,
}: UserAvatarLegacyProps) {
	return (
		<span className="relative inline-flex">
			<Avatar className={cn(sizeStyles[size])}>
				<AvatarImage src={src} alt={name} />
				<AvatarFallback>{name.charAt(0).toUpperCase()}</AvatarFallback>
			</Avatar>
			{showBadge ? (
				<span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-background" />
			) : null}
		</span>
	);
}
