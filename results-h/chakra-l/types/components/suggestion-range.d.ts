export interface SuggestionRangeProps {
    /** Name of the suggestion setting. */
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
export declare function SuggestionRange({ label, value, min, max, onRangeChange }: SuggestionRangeProps): import("react").JSX.Element;
