import type { ReactNode } from "react";
export interface ClipFilterProps {
    /** Filters that are switched on, in display order. */
    activeLabels: string[];
    /** Fired with the label that was removed. */
    onRemove: (label: string) => void;
    /** Clears every filter; the button is hidden without it. */
    onClearAll?: () => void;
    /** Drawn before the chips, e.g. an "add filter" button. */
    leading?: ReactNode;
    /** How the row wraps when it runs out of width. */
    overflow?: "wrap" | "scroll";
}
export declare function ClipFilter({ activeLabels, onRemove, onClearAll, leading, overflow }: ClipFilterProps): import("react").JSX.Element;
