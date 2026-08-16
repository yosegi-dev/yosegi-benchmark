export interface UploadProgressBarProps {
    value: number;
    /** The value that counts as full. */
    max?: number;
    /** Shown above the track. */
    label?: string;
    tone?: "default" | "warning" | "danger";
    /** Prints the percentage at the right of the label. */
    showValue?: boolean;
}
export declare function UploadProgressBar({ value, max, label, tone, showValue, }: UploadProgressBarProps): import("react").JSX.Element;
