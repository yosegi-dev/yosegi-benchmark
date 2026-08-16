import type { ReactNode } from "react";
export interface TourMeterProps {
    /** Name of the tour measure. */
    label: string;
    /** Current value, between 0 and `max`. */
    value: number;
    /** Upper bound of the track. */
    max?: number;
    /** Picks the colour of the filled range. */
    tone?: "neutral" | "positive" | "warning" | "critical";
    /** Rendered under the track. */
    caption?: ReactNode;
}
export declare function TourMeter({ label, value, max, tone, caption }: TourMeterProps): import("react").JSX.Element;
