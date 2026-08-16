import type { ReactNode } from "react";
export interface ReportCalloutProps {
    /** Headline. */
    title: string;
    /** Copy under the headline. */
    body: string;
    /** Colour the callout is drawn in. */
    tone?: "info" | "tip" | "warning";
    /** Drawn at the trailing edge, e.g. a link. */
    action?: ReactNode;
}
export declare function ReportCallout({ title, body, tone, action }: ReportCalloutProps): import("react").JSX.Element;
