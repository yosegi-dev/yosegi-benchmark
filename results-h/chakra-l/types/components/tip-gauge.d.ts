import type { ReactNode } from "react";
export interface TipGaugeProps {
    /** Name of the tip measure. */
    label: string;
    /** Current value, from 0 to 100. */
    value: number;
    /** Rendered under the label. */
    caption?: ReactNode;
    /** Controls the ring diameter. */
    size?: "xs" | "sm" | "md" | "lg";
}
export declare function TipGauge({ label, value, caption, size }: TipGaugeProps): import("react").JSX.Element;
