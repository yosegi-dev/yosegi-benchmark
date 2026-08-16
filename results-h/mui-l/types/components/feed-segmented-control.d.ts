export interface FeedSegmentedControlProps {
    /** The selected segment. */
    value: string;
    /** Segment labels; the value of a segment is its label. */
    options: string[];
    /** Fired with the segment that was picked; ignores a click on the active one. */
    onChange: (value: string) => void;
    /** MUI toggle-button scale. */
    size?: "small" | "medium" | "large";
    /** Stretches the control to the width of its container. */
    fullWidth?: boolean;
}
export declare function FeedSegmentedControl({ value, options, onChange, size, fullWidth, }: FeedSegmentedControlProps): import("react").JSX.Element;
