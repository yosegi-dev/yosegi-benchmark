import type { ReactNode } from "react";
export interface LanguageSectionProps {
    heading: string;
    /** Explains the group of controls under the heading. */
    description?: string;
    /** The rows or controls belonging to this section. */
    children: ReactNode;
    /** Draws a rule between the heading and the contents. */
    divider?: boolean;
}
export declare function LanguageSection({ heading, description, children, divider }: LanguageSectionProps): import("react").JSX.Element;
