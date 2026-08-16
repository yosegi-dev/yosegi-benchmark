import type { ActionTone, Density } from "~/models";
type ControlSize = "small" | "medium" | "large";
type ChipSize = "small" | "medium";
type ButtonColor = "primary" | "secondary" | "success" | "error" | "info" | "inherit";
type TextVariant = "body2" | "body1" | "h6";
/**
 * The product exposes three densities; MUI only knows small/medium/large, so the
 * layer resolves one to the other in a single place rather than at every call site.
 */
export declare function controlSize(density: Density): ControlSize;
/** Chip and TextField stop at medium, so roomy has to fall back rather than widen. */
export declare function chipSize(density: Density): ChipSize;
/** Spacing units passed to `gap`/`spacing`, in MUI's 8px steps. */
export declare function gapUnits(density: Density): number;
/** Padding units for a surface (card, panel, shell column). */
export declare function padUnits(density: Density): number;
/** Avatar edge length in px; MUI sizes avatars by explicit width/height only. */
export declare function avatarPx(density: Density): number;
/** Typography variant for running text at the given density. */
export declare function bodyVariant(density: Density): TextVariant;
/**
 * Each action tone claims one of MUI's palette colors; `quiet` deliberately
 * inherits so a bell or overflow control does not read as an accent.
 */
export declare function toneColor(tone: ActionTone): ButtonColor;
export {};
