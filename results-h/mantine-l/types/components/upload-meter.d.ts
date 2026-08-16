export interface UploadMeterProps {
    label: string;
    value: number;
    /** Value that counts as full. */
    max?: number;
    /** Shows the percentage to the right of the label. */
    showValue?: boolean;
    color?: string;
}
export declare function UploadMeter({ label, value, max, showValue, color }: UploadMeterProps): import("react").JSX.Element;
