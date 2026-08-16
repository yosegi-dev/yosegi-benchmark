import type { ReactNode } from "react";
import type { Density } from "~/models";
export interface SuggestedUserPanelProps {
    /** Panel title, e.g. "Who to follow". */
    heading: string;
    /** Slot for the suggested user rows. */
    rows: ReactNode;
    /** Controls the panel padding and the gap between rows. */
    density?: Density;
}
export declare function SuggestedUserPanel({ heading, rows, density }: SuggestedUserPanelProps): import("react").JSX.Element;
