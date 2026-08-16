export interface DraftCalloutProps {
    /** Headline. */
    title: string;
    /** Copy under the headline. */
    body: string;
    /** Colour the callout is drawn in. */
    tone?: "info" | "tip" | "warning";
    /** Removes the padding for use inside a dense list. */
    compact?: boolean;
}
export declare function DraftCallout({ title, body, tone, compact }: DraftCalloutProps): import("react").JSX.Element;
