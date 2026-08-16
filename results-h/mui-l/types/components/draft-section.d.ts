import type { ReactNode } from "react";
export interface DraftSectionProps {
    /** Section title. */
    heading: ReactNode;
    /** Section contents. */
    children: ReactNode;
    /** Copy under the heading. */
    description?: string;
    /** Draws a rule under the heading. */
    divided?: boolean;
}
export declare function DraftSection({ heading, children, description, divided }: DraftSectionProps): import("react").JSX.Element;
