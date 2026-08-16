export interface DraftRangeProps {
    /** Name of the draft setting. */
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
export declare function DraftRange({ label, value, min, max, onRangeChange }: DraftRangeProps): import("react").JSX.Element;
