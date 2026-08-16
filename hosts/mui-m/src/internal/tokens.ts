import type { ActionTone, Density } from "~/models";

type ControlSize = "small" | "medium" | "large";
type ChipSize = "small" | "medium";
type ButtonColor = "primary" | "secondary" | "success" | "error" | "info" | "inherit";
type TextVariant = "body2" | "body1" | "h6";

/**
 * The product exposes three densities; MUI only knows small/medium/large, so the
 * layer resolves one to the other in a single place rather than at every call site.
 */
export function controlSize(density: Density): ControlSize {
	switch (density) {
		case "compact":
			return "small";
		case "roomy":
			return "large";
		default:
			return "medium";
	}
}

/** Chip and TextField stop at medium, so roomy has to fall back rather than widen. */
export function chipSize(density: Density): ChipSize {
	return density === "compact" ? "small" : "medium";
}

/** Spacing units passed to `gap`/`spacing`, in MUI's 8px steps. */
export function gapUnits(density: Density): number {
	switch (density) {
		case "compact":
			return 0.75;
		case "roomy":
			return 2;
		default:
			return 1.25;
	}
}

/** Padding units for a surface (card, panel, shell column). */
export function padUnits(density: Density): number {
	switch (density) {
		case "compact":
			return 1;
		case "roomy":
			return 3;
		default:
			return 2;
	}
}

/** Avatar edge length in px; MUI sizes avatars by explicit width/height only. */
export function avatarPx(density: Density): number {
	switch (density) {
		case "compact":
			return 32;
		case "roomy":
			return 48;
		default:
			return 40;
	}
}

/** Typography variant for running text at the given density. */
export function bodyVariant(density: Density): TextVariant {
	switch (density) {
		case "compact":
			return "body2";
		case "roomy":
			return "h6";
		default:
			return "body1";
	}
}

/**
 * Each action tone claims one of MUI's palette colors; `quiet` deliberately
 * inherits so a bell or overflow control does not read as an accent.
 */
export function toneColor(tone: ActionTone): ButtonColor {
	switch (tone) {
		case "reply":
			return "primary";
		case "repost":
			return "success";
		case "like":
			return "error";
		default:
			return "inherit";
	}
}
