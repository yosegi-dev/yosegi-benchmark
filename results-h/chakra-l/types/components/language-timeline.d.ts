export interface LanguageTimelineProps {
    /** The language entries, newest first. */
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
export declare function LanguageTimeline({ entries, size, solid }: LanguageTimelineProps): import("react").JSX.Element;
