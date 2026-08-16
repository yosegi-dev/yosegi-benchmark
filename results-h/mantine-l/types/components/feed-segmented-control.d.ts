export interface FeedSegmentedControlProps {
    /** Value of the selected segment. */
    value: string;
    /** The segments, in order. */
    options: {
        value: string;
        label: string;
    }[];
    onChange: (value: string) => void;
    fullWidth?: boolean;
}
export declare function FeedSegmentedControl({ value, options, onChange, fullWidth, }: FeedSegmentedControlProps): import("react").JSX.Element;
