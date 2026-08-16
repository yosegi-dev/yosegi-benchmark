import type { ReactNode } from "react";
export interface ProfileSectionProps {
    heading: string;
    /** Explains the group of controls under the heading. */
    description?: string;
    /** The rows or controls belonging to this section. */
    children: ReactNode;
    /** Draws a rule between the heading and the contents. */
    divider?: boolean;
}
export declare function ProfileSection({ heading, description, children, divider }: ProfileSectionProps): import("react").JSX.Element;
