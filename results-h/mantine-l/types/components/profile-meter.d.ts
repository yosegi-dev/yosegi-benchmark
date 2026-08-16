export interface ProfileMeterProps {
    label: string;
    value: number;
    /** Value that counts as full. */
    max?: number;
    /** Shows the percentage to the right of the label. */
    showValue?: boolean;
    color?: string;
}
export declare function ProfileMeter({ label, value, max, showValue, color }: ProfileMeterProps): import("react").JSX.Element;
