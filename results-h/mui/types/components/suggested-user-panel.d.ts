import type { ReactNode } from "react";
import type { Density } from "~/models";
export interface SuggestedUserPanelProps {
    /** Title shown at the top of the panel, e.g. "Who to follow". */
    heading: string;
    /** Slot for the panel rows, normally `SuggestedUserRow`s. */
    rows: ReactNode;
    /** Drives the panel padding. */
    density?: Density;
}
export declare function SuggestedUserPanel({ heading, rows, density }: SuggestedUserPanelProps): import("react").JSX.Element;
