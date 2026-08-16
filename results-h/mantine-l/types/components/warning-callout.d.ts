import type { ReactNode } from "react";
export interface WarningCalloutProps {
    title: string;
    /** The body of the callout. */
    children: ReactNode;
    /** Glyph shown in the disc; a dot is used when absent. */
    icon?: ReactNode;
    tone?: "info" | "tip" | "warning";
}
export declare function WarningCallout({ title, children, icon, tone }: WarningCalloutProps): import("react").JSX.Element;
