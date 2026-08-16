export interface TranslationTimelineProps {
    /** The translation entries, newest first. */
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
export declare function TranslationTimeline({ entries, size, solid }: TranslationTimelineProps): import("react").JSX.Element;
