import type { MantineColor, MantineSize, MantineSpacing } from "@mantine/core";
import type { ActionTone, Density, Visibility } from "~/models";
/** Control size (inputs, buttons) for a density. */
export declare const controlSize: Record<Density, MantineSize>;
/** Body text size for a density. */
export declare const textSize: Record<Density, MantineSize>;
/** Gap between stacked elements for a density. */
export declare const gap: Record<Density, MantineSpacing>;
/** Inner padding of a surface for a density. */
export declare const pad: Record<Density, MantineSpacing>;
/** Avatar diameter in px for a density. */
export declare const avatarSize: Record<Density, number>;
/** Mantine palette key backing each action tone. */
export declare const toneColor: Record<ActionTone, MantineColor>;
/** Human label for each visibility value. */
export declare const visibilityLabel: Record<Visibility, string>;
/** 1234 -> "1.2K". Counts sit inside controls, so they have to stay short. */
export declare function formatCount(value: number): string;
