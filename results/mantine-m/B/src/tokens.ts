import type { MantineColor, MantineSize, MantineSpacing } from "@mantine/core";
import type { ActionTone, Density, Visibility } from "~/models";

// The product layer speaks density/tone; Mantine speaks size/color/variant. These maps are the
// only place the translation happens, so a Mantine upgrade touches one file.

/** Control size (inputs, buttons) for a density. */
export const controlSize: Record<Density, MantineSize> = {
	compact: "xs",
	cozy: "sm",
	roomy: "md",
};

/** Body text size for a density. */
export const textSize: Record<Density, MantineSize> = {
	compact: "xs",
	cozy: "sm",
	roomy: "md",
};

/** Gap between stacked elements for a density. */
export const gap: Record<Density, MantineSpacing> = {
	compact: "xs",
	cozy: "sm",
	roomy: "lg",
};

/** Inner padding of a surface for a density. */
export const pad: Record<Density, MantineSpacing> = {
	compact: "xs",
	cozy: "md",
	roomy: "xl",
};

/** Avatar diameter in px for a density. */
export const avatarSize: Record<Density, number> = {
	compact: 28,
	cozy: 40,
	roomy: 52,
};

/** Mantine palette key backing each action tone. */
export const toneColor: Record<ActionTone, MantineColor> = {
	reply: "blue",
	repost: "teal",
	like: "pink",
	quiet: "gray",
};

/** Human label for each visibility value. */
export const visibilityLabel: Record<Visibility, string> = {
	public: "Public",
	followers: "Followers",
	circle: "Circle",
	unlisted: "Unlisted",
};

const compactNumber = new Intl.NumberFormat("en", {
	notation: "compact",
	maximumFractionDigits: 1,
});

/** 1234 -> "1.2K". Counts sit inside controls, so they have to stay short. */
export function formatCount(value: number): string {
	return compactNumber.format(value);
}
