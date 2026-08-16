import { Globe, Lock, Users, UsersRound } from "lucide-react";
import type { ComponentType } from "react";

import { densityControl } from "~/lib/density";
import { cn } from "~/lib/utils";
import type { Density, Visibility } from "~/models";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "~/ui/select";

const VISIBILITY_LABELS: Record<Visibility, string> = {
	public: "Public",
	followers: "Followers",
	circle: "Circle",
	unlisted: "Unlisted",
};

const VISIBILITY_ICONS: Record<Visibility, ComponentType<{ className?: string }>> = {
	public: Globe,
	followers: Users,
	circle: UsersRound,
	unlisted: Lock,
};

const VISIBILITY_ORDER: Visibility[] = ["public", "followers", "circle", "unlisted"];

export interface VisibilityPickerProps {
	/** The audience currently selected. */
	visibility: Visibility;
	/** Called with the audience the user selected. */
	onVisibilityChange: (visibility: Visibility) => void;
	/** Spacing scale, which here selects the trigger height. */
	density?: Density;
}

export function VisibilityPicker({
	visibility,
	onVisibilityChange,
	density = "cozy",
}: VisibilityPickerProps) {
	return (
		<Select
			value={visibility}
			onValueChange={(value) => onVisibilityChange(value as Visibility)}
		>
			<SelectTrigger
				className={cn("w-[150px] rounded-full", densityControl[density])}
				aria-label="Audience"
			>
				<SelectValue placeholder="Audience" />
			</SelectTrigger>
			<SelectContent>
				{VISIBILITY_ORDER.map((value) => {
					const Icon = VISIBILITY_ICONS[value];
					return (
						<SelectItem key={value} value={value}>
							<span className="flex items-center gap-2">
								<Icon className="h-3.5 w-3.5" />
								{VISIBILITY_LABELS[value]}
							</span>
						</SelectItem>
					);
				})}
			</SelectContent>
		</Select>
	);
}
