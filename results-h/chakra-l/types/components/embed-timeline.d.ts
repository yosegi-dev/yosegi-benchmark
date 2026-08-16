export interface EmbedTimelineProps {
    /** The embed entries, newest first. */
    entries: {
        id: string;
        title: string;
        description: string;
        marker: string;
    }[];
    /** Controls the indicator size and the spacing between entries. */
    size?: "sm" | "md" | "lg";
    /** Draws the indicators filled rather than outlined. */
    solid?: boolean;
}
export declare function EmbedTimeline({ entries, size, solid }: EmbedTimelineProps): import("react").JSX.Element;
