import type { ReactNode } from "react";
export interface UpdateCalloutProps {
    title: string;
    /** The body of the callout. */
    children: ReactNode;
    /** Glyph shown in the disc; a dot is used when absent. */
    icon?: ReactNode;
    tone?: "info" | "tip" | "warning";
}
export declare function UpdateCallout({ title, children, icon, tone }: UpdateCalloutProps): import("react").JSX.Element;
