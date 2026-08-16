export interface PollMeterProps {
    label: string;
    value: number;
    /** Value that counts as full. */
    max?: number;
    /** Shows the percentage to the right of the label. */
    showValue?: boolean;
    color?: string;
}
export declare function PollMeter({ label, value, max, showValue, color }: PollMeterProps): import("react").JSX.Element;
