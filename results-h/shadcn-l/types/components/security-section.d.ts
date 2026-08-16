import type { ReactNode } from "react";
export interface SecuritySectionProps {
    heading: string;
    /** Explains the group of controls under the heading. */
    description?: string;
    /** The rows or controls belonging to this section. */
    children: ReactNode;
    /** Draws a rule between the heading and the contents. */
    divider?: boolean;
}
export declare function SecuritySection({ heading, description, children, divider }: SecuritySectionProps): import("react").JSX.Element;
