import type { ReactNode } from "react";
import type { Density } from "~/models";
export interface TrendPanelProps {
    /** Panel title, e.g. "Trending now". */
    heading: string;
    /** Slot for the rows of the panel. */
    items: ReactNode;
    /** Drives the panel padding and row spacing. */
    density?: Density;
}
export declare function TrendPanel({ heading, items, density }: TrendPanelProps): import("react").JSX.Element;
