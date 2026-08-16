import type { ReactNode } from "react";
export interface IncidentGaugeProps {
    /** Name of the incident measure. */
    label: string;
    /** Current value, from 0 to 100. */
    value: number;
    /** Rendered under the label. */
    caption?: ReactNode;
    /** Controls the ring diameter. */
    size?: "xs" | "sm" | "md" | "lg";
}
export declare function IncidentGauge({ label, value, caption, size }: IncidentGaugeProps): import("react").JSX.Element;
