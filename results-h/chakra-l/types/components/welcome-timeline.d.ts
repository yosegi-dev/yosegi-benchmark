export interface WelcomeTimelineProps {
    /** The welcome entries, newest first. */
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
export declare function WelcomeTimeline({ entries, size, solid }: WelcomeTimelineProps): import("react").JSX.Element;
