import { NativeSelect } from "@chakra-ui/react";
import type { Density, Visibility } from "~/models";

const pickerSize = {
	compact: "xs",
	cozy: "sm",
	roomy: "md",
} as const;

const options: { value: Visibility; label: string }[] = [
	{ value: "public", label: "Everyone" },
	{ value: "followers", label: "Followers" },
	{ value: "circle", label: "Circle" },
	{ value: "unlisted", label: "Unlisted" },
];

export interface VisibilityPickerProps {
	/** The audience currently selected for the draft. */
	visibility: Visibility;
	/** Fired with the audience the user picked. */
	onVisibilityChange: (visibility: Visibility) => void;
	/** Controls the control height. */
	density?: Density;
}

export function VisibilityPicker({
	visibility,
	onVisibilityChange,
	density = "cozy",
}: VisibilityPickerProps) {
	return (
		<NativeSelect.Root size={pickerSize[density]} variant="plain" width="auto">
			<NativeSelect.Field
				aria-label="Who can see this post"
				value={visibility}
				color="colorPalette.fg"
				fontWeight="medium"
				onChange={(event) => onVisibilityChange(event.currentTarget.value as Visibility)}
			>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</NativeSelect.Field>
			<NativeSelect.Indicator />
		</NativeSelect.Root>
	);
}
