import type { ReactNode } from "react";
export interface ProfileCalloutProps {
    /** Headline. */
    title: string;
    /** Copy under the headline. */
    body: string;
    /** Colour the callout is drawn in. */
    tone?: "info" | "tip" | "warning";
    /** Drawn at the trailing edge, e.g. a link. */
    action?: ReactNode;
}
export declare function ProfileCallout({ title, body, tone, action }: ProfileCalloutProps): import("react").JSX.Element;
