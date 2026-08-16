import type { ReactNode } from "react";
export interface ReviewTabsProps {
    /** The review panels, in display order. */
    panels: {
        value: string;
        label: string;
        content: ReactNode;
    }[];
    /** Value of the panel currently shown. */
    activeValue: string;
    /** Fired with the value of the panel the user moved to. */
    onSelect: (value: string) => void;
    /** Controls the tab height. */
    size?: "sm" | "md" | "lg";
}
export declare function ReviewTabs({ panels, activeValue, onSelect, size }: ReviewTabsProps): import("react").JSX.Element;
