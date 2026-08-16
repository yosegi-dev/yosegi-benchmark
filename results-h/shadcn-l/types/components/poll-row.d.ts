import type { ReactNode } from "react";
export interface PollRowProps {
    label: string;
    /** Right-aligned value, shown before the chevron. */
    value?: string;
    /** Rendered under the label when the row needs explaining. */
    help?: ReactNode;
    emphasis?: "default" | "strong";
    /** Draws a rule under the row. */
    divided?: boolean;
    onSelect?: () => void;
}
export declare function PollRow({ label, value, help, emphasis, divided, onSelect, }: PollRowProps): import("react").JSX.Element;
