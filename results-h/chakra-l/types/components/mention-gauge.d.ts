import type { ReactNode } from "react";
export interface MentionGaugeProps {
    /** Name of the mention measure. */
    label: string;
    /** Current value, from 0 to 100. */
    value: number;
    /** Rendered under the label. */
    caption?: ReactNode;
    /** Controls the ring diameter. */
    size?: "xs" | "sm" | "md" | "lg";
}
export declare function MentionGauge({ label, value, caption, size }: MentionGaugeProps): import("react").JSX.Element;
