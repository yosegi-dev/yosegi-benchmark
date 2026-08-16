import type { ReactNode } from "react";
export interface OnboardingCalloutProps {
    title: string;
    /** The body of the callout. */
    children: ReactNode;
    /** Glyph shown in the disc; a dot is used when absent. */
    icon?: ReactNode;
    tone?: "info" | "tip" | "warning";
}
export declare function OnboardingCallout({ title, children, icon, tone }: OnboardingCalloutProps): import("react").JSX.Element;
