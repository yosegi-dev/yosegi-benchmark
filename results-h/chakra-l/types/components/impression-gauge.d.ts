import type { ReactNode } from "react";
export interface ImpressionGaugeProps {
    /** Name of the impression measure. */
    label: string;
    /** Current value, from 0 to 100. */
    value: number;
    /** Rendered under the label. */
    caption?: ReactNode;
    /** Controls the ring diameter. */
    size?: "xs" | "sm" | "md" | "lg";
}
export declare function ImpressionGauge({ label, value, caption, size }: ImpressionGaugeProps): import("react").JSX.Element;
