import type { ReactNode } from "react";
import type { Density } from "~/models";
export interface TrendPanelProps {
    /** Panel title, e.g. `"Trends for you"`. */
    heading: string;
    /** Slot for the panel rows. */
    items: ReactNode;
    /** Spacing scale applied to the panel's padding. */
    density?: Density;
}
export declare function TrendPanel({ heading, items, density }: TrendPanelProps): import("react").JSX.Element;
