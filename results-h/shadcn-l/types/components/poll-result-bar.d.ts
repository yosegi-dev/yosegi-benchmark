export interface PollResultBarProps {
    value: number;
    /** The value that counts as full. */
    max?: number;
    /** Shown above the track. */
    label?: string;
    tone?: "default" | "warning" | "danger";
    /** Prints the percentage at the right of the label. */
    showValue?: boolean;
}
export declare function PollResultBar({ value, max, label, tone, showValue, }: PollResultBarProps): import("react").JSX.Element;
