import type { ReactNode } from "react";
export interface KeywordSectionProps {
    /** Section title. */
    heading: ReactNode;
    /** Section contents. */
    children: ReactNode;
    /** Copy under the heading. */
    description?: string;
    /** Vertical rhythm between the heading and the contents. */
    spacing?: "tight" | "normal" | "loose";
}
export declare function KeywordSection({ heading, children, description, spacing }: KeywordSectionProps): import("react").JSX.Element;
