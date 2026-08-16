import type { ReactNode } from "react";
export interface HashtagSectionProps {
    /** Section title. */
    heading: ReactNode;
    /** Section contents. */
    children: ReactNode;
    /** Copy under the heading. */
    description?: string;
    /** Vertical rhythm between the heading and the contents. */
    spacing?: "tight" | "normal" | "loose";
}
export declare function HashtagSection({ heading, children, description, spacing }: HashtagSectionProps): import("react").JSX.Element;
