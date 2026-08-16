import type { ReactNode } from "react";
import type { Density } from "~/models";
export interface TrendPanelProps {
    /** Title shown at the top of the panel, e.g. "Trending now". */
    heading: string;
    /** Slot for the panel rows, normally `TrendItem`s. */
    items: ReactNode;
    /** Drives the panel padding. */
    density?: Density;
}
export declare function TrendPanel({ heading, items, density }: TrendPanelProps): import("react").JSX.Element;
