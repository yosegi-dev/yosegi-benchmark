export interface ClipCalloutProps {
    /** Headline. */
    title: string;
    /** Copy under the headline. */
    body: string;
    /** Colour the callout is drawn in. */
    tone?: "info" | "tip" | "warning";
    /** Removes the padding for use inside a dense list. */
    compact?: boolean;
}
export declare function ClipCallout({ title, body, tone, compact }: ClipCalloutProps): import("react").JSX.Element;
