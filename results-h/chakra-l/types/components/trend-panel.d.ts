import type { ReactNode } from "react";
import type { Density } from "~/models";
export interface TrendPanelProps {
    /** Panel title, e.g. "Trends for you". */
    heading: string;
    /** Slot for the trend rows. */
    items: ReactNode;
    /** Controls the panel padding and the gap between rows. */
    density?: Density;
}
export declare function TrendPanel({ heading, items, density }: TrendPanelProps): import("react").JSX.Element;
