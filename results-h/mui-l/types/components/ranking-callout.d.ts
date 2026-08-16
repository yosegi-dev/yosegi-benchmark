import type { ReactNode } from "react";
export interface RankingCalloutProps {
    /** Headline. */
    title: string;
    /** Copy under the headline. */
    body: string;
    /** Colour the callout is drawn in. */
    tone?: "info" | "tip" | "warning";
    /** Drawn at the trailing edge, e.g. a link. */
    action?: ReactNode;
}
export declare function RankingCallout({ title, body, tone, action }: RankingCalloutProps): import("react").JSX.Element;
