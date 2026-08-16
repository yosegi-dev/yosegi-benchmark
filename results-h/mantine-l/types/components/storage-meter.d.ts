export interface StorageMeterProps {
    label: string;
    value: number;
    /** Value that counts as full. */
    max?: number;
    /** Shows the percentage to the right of the label. */
    showValue?: boolean;
    color?: string;
}
export declare function StorageMeter({ label, value, max, showValue, color }: StorageMeterProps): import("react").JSX.Element;
