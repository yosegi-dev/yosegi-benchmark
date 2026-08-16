export interface StoryCalloutProps {
    /** Headline. */
    title: string;
    /** Copy under the headline. */
    body: string;
    /** Colour the callout is drawn in. */
    tone?: "info" | "tip" | "warning";
    /** Removes the padding for use inside a dense list. */
    compact?: boolean;
}
export declare function StoryCallout({ title, body, tone, compact }: StoryCalloutProps): import("react").JSX.Element;
