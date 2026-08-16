import type { ReactNode } from "react";
export interface SettingsSectionProps {
    heading: string;
    /** Explains the group of controls under the heading. */
    description?: string;
    /** The rows or controls belonging to this section. */
    children: ReactNode;
    /** Draws a rule between the heading and the contents. */
    divider?: boolean;
}
export declare function SettingsSection({ heading, description, children, divider }: SettingsSectionProps): import("react").JSX.Element;
