import type { ReactNode } from "react";
export interface LanguageCalloutProps {
    /** Headline. */
    title: string;
    /** Copy under the headline. */
    body: string;
    /** Colour the callout is drawn in. */
    tone?: "info" | "tip" | "warning";
    /** Drawn at the trailing edge, e.g. a link. */
    action?: ReactNode;
}
export declare function LanguageCallout({ title, body, tone, action }: LanguageCalloutProps): import("react").JSX.Element;
