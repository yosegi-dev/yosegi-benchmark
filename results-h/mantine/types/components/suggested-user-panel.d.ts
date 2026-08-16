import type { ReactNode } from "react";
import type { Density } from "~/models";
export interface SuggestedUserPanelProps {
    /** Panel title, e.g. "Who to follow". */
    heading: string;
    /** Slot for the rows of the panel. */
    rows: ReactNode;
    /** Drives the panel padding and row spacing. */
    density?: Density;
}
export declare function SuggestedUserPanel({ heading, rows, density }: SuggestedUserPanelProps): import("react").JSX.Element;
