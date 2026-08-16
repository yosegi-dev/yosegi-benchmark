import type { ReactNode } from "react";
export interface MilestoneSectionProps {
    /** Section title. */
    heading: ReactNode;
    /** Section contents. */
    children: ReactNode;
    /** Copy under the heading. */
    description?: string;
    /** Vertical rhythm between the heading and the contents. */
    spacing?: "tight" | "normal" | "loose";
}
export declare function MilestoneSection({ heading, children, description, spacing }: MilestoneSectionProps): import("react").JSX.Element;
