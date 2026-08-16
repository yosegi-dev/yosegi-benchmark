import type { ReactNode } from "react";
export interface PrivacyCalloutProps {
    title: string;
    /** The body of the callout. */
    children: ReactNode;
    /** Glyph shown in the disc; a dot is used when absent. */
    icon?: ReactNode;
    tone?: "info" | "tip" | "warning";
}
export declare function PrivacyCallout({ title, children, icon, tone }: PrivacyCalloutProps): import("react").JSX.Element;
