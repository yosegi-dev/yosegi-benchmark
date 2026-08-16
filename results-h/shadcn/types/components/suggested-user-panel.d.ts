import type { ReactNode } from "react";
import type { Density } from "~/models";
export interface SuggestedUserPanelProps {
    /** Panel title, e.g. `"Who to follow"`. */
    heading: string;
    /** Slot for the panel rows. */
    rows: ReactNode;
    /** Spacing scale applied to the panel's padding. */
    density?: Density;
}
export declare function SuggestedUserPanel({ heading, rows, density, }: SuggestedUserPanelProps): import("react").JSX.Element;
