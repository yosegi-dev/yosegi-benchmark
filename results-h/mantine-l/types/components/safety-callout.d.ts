import type { ReactNode } from "react";
export interface SafetyCalloutProps {
    title: string;
    /** The body of the callout. */
    children: ReactNode;
    /** Glyph shown in the disc; a dot is used when absent. */
    icon?: ReactNode;
    tone?: "info" | "tip" | "warning";
}
export declare function SafetyCallout({ title, children, icon, tone }: SafetyCalloutProps): import("react").JSX.Element;
