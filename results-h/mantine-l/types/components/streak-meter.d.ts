export interface StreakMeterProps {
    label: string;
    value: number;
    /** Value that counts as full. */
    max?: number;
    /** Shows the percentage to the right of the label. */
    showValue?: boolean;
    color?: string;
}
export declare function StreakMeter({ label, value, max, showValue, color }: StreakMeterProps): import("react").JSX.Element;
