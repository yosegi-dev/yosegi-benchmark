import type { ReactNode } from "react";
export interface AchievementGaugeProps {
    /** Name of the achievement measure. */
    label: string;
    /** Current value, from 0 to 100. */
    value: number;
    /** Rendered under the label. */
    caption?: ReactNode;
    /** Controls the ring diameter. */
    size?: "xs" | "sm" | "md" | "lg";
}
export declare function AchievementGauge({ label, value, caption, size }: AchievementGaugeProps): import("react").JSX.Element;
