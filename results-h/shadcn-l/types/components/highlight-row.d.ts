import type { ReactNode } from "react";
export interface HighlightRowProps {
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
export declare function HighlightRow({ title, description, leading, trailing, tone, onSelect, }: HighlightRowProps): import("react").JSX.Element;
