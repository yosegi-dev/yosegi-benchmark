import { Select } from "@mantine/core";
import type { Density, Visibility } from "~/models";
import { controlSize, visibilityLabel } from "~/tokens";

const OPTIONS: { value: Visibility; label: string }[] = (
	["public", "followers", "circle", "unlisted"] as const
).map((value) => ({ value, label: visibilityLabel[value] }));

export interface VisibilityPickerProps {
	/** The currently selected audience. */
	visibility: Visibility;
	/** Fired with the audience the user picked. */
	onVisibilityChange: (visibility: Visibility) => void;
	/** Control size. */
	density?: Density;
}

export function VisibilityPicker({
	visibility,
	onVisibilityChange,
	density = "cozy",
}: VisibilityPickerProps) {
	return (
		<Select<Visibility>
			data={OPTIONS}
			value={visibility}
			size={controlSize[density]}
			radius="xl"
			w={160}
			allowDeselect={false}
			checkIconPosition="right"
			aria-label="Who can see this post"
			onChange={(value) => {
				// allowDeselect={false} keeps a value selected, so null only appears on a cleared input.
				if (value !== null) {
					onVisibilityChange(value);
				}
			}}
		/>
	);
}
