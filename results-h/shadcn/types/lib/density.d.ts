import type { Density } from "~/models";
/**
 * Class-string tables keyed by the product's own density scale. Kept here rather
 * than in `src/ui` because `src/ui` mirrors shadcn's generated output verbatim and
 * has to stay diffable against it.
 */
export declare const densityPadding: Record<Density, string>;
export declare const densityGap: Record<Density, string>;
export declare const densityText: Record<Density, string>;
export declare const densityControl: Record<Density, string>;
export declare const densityAvatar: Record<Density, string>;
