import type { Density } from "~/models";

/**
 * Class-string tables keyed by the product's own density scale. Kept here rather
 * than in `src/ui` because `src/ui` mirrors shadcn's generated output verbatim and
 * has to stay diffable against it.
 */
export const densityPadding: Record<Density, string> = {
	compact: "p-2",
	cozy: "p-4",
	roomy: "p-6",
};

export const densityGap: Record<Density, string> = {
	compact: "gap-1",
	cozy: "gap-2",
	roomy: "gap-4",
};

export const densityText: Record<Density, string> = {
	compact: "text-xs",
	cozy: "text-sm",
	roomy: "text-base",
};

export const densityControl: Record<Density, string> = {
	compact: "h-7 text-xs",
	cozy: "h-9 text-sm",
	roomy: "h-11 text-base",
};

export const densityAvatar: Record<Density, string> = {
	compact: "h-8 w-8",
	cozy: "h-10 w-10",
	roomy: "h-12 w-12",
};
