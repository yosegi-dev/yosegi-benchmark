export interface ReputationMeterProps {
    label: string;
    value: number;
    /** Value that counts as full. */
    max?: number;
    /** Shows the percentage to the right of the label. */
    showValue?: boolean;
    color?: string;
}
export declare function ReputationMeter({ label, value, max, showValue, color }: ReputationMeterProps): import("react").JSX.Element;
