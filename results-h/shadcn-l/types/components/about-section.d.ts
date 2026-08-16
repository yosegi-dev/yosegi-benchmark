import type { ReactNode } from "react";
export interface AboutSectionProps {
    heading: string;
    /** Explains the group of controls under the heading. */
    description?: string;
    /** The rows or controls belonging to this section. */
    children: ReactNode;
    /** Draws a rule between the heading and the contents. */
    divider?: boolean;
}
export declare function AboutSection({ heading, description, children, divider }: AboutSectionProps): import("react").JSX.Element;
