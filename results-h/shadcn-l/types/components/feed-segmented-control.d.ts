export interface FeedSegmentedControlProps {
    /** Which sort the feed is currently using. */
    selected: "latest" | "top" | "media";
    onSelect: (segment: "latest" | "top" | "media") => void;
    size?: "sm" | "md" | "lg";
}
export declare function FeedSegmentedControl({ selected, onSelect, size, }: FeedSegmentedControlProps): import("react").JSX.Element;
