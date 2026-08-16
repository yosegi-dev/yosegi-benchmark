export interface FeedSegmentedControlProps {
    /** The selected segment's value. */
    value: string;
    /** The segments to render, in order. */
    options: {
        value: string;
        label: string;
    }[];
    /** Controls the control height. */
    size?: "xs" | "sm" | "md" | "lg";
    /** Fired with the value of the segment the user moved to. */
    onChange: (value: string) => void;
}
export declare function FeedSegmentedControl({ value, options, size, onChange, }: FeedSegmentedControlProps): import("react").JSX.Element;
