import type { ReactNode } from "react";
export interface InviteGaugeProps {
    /** Name of the invite measure. */
    label: string;
    /** Current value, from 0 to 100. */
    value: number;
    /** Rendered under the label. */
    caption?: ReactNode;
    /** Controls the ring diameter. */
    size?: "xs" | "sm" | "md" | "lg";
}
export declare function InviteGauge({ label, value, caption, size }: InviteGaugeProps): import("react").JSX.Element;
