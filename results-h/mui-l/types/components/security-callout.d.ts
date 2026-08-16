import type { ReactNode } from "react";
export interface SecurityCalloutProps {
    /** Headline. */
    title: string;
    /** Copy under the headline. */
    body: string;
    /** Colour the callout is drawn in. */
    tone?: "info" | "tip" | "warning";
    /** Drawn at the trailing edge, e.g. a link. */
    action?: ReactNode;
}
export declare function SecurityCallout({ title, body, tone, action }: SecurityCalloutProps): import("react").JSX.Element;
