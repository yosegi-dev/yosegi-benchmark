import type { ReactNode } from "react";
export interface NotificationSectionProps {
    /** Section title. */
    heading: ReactNode;
    /** Section contents. */
    children: ReactNode;
    /** Copy under the heading. */
    description?: string;
    /** Vertical rhythm between the heading and the contents. */
    spacing?: "tight" | "normal" | "loose";
}
export declare function NotificationSection({ heading, children, description, spacing }: NotificationSectionProps): import("react").JSX.Element;
