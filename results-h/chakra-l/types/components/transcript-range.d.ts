export interface TranscriptRangeProps {
    /** Name of the transcript setting. */
    label: string;
    /** Current value, between `min` and `max`. */
    value: number;
    /** Lower bound of the track. */
    min?: number;
    /** Upper bound of the track. */
    max?: number;
    /** Fired with the value the thumb landed on. */
    onRangeChange: (value: number) => void;
}
export declare function TranscriptRange({ label, value, min, max, onRangeChange }: TranscriptRangeProps): import("react").JSX.Element;
