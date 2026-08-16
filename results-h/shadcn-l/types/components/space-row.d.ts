import type { ReactNode } from "react";
export interface SpaceRowProps {
    title: string;
    /** Secondary line under the title. */
    description?: string;
    /** Replaces the default icon at the start of the row. */
    leading?: ReactNode;
    /** Rendered at the far right, e.g. a switch or an overflow button. */
    trailing?: ReactNode;
    tone?: "neutral" | "info" | "warning" | "danger";
    onSelect?: () => void;
}
export declare function SpaceRow({ title, description, leading, trailing, tone, onSelect, }: SpaceRowProps): import("react").JSX.Element;
