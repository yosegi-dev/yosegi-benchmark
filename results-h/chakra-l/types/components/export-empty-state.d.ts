import type { ReactNode } from "react";
export interface ExportEmptyStateProps {
    /** Headline shown when there is no export to display. */
    title: string;
    /** One line telling the reader what to do about it. */
    description?: string;
    /** Rendered under the description — usually a call to action. */
    action?: ReactNode;
    /** Controls the spacing and the icon size. */
    size?: "sm" | "md" | "lg";
}
export declare function ExportEmptyState({ title, description, action, size }: ExportEmptyStateProps): import("react").JSX.Element;
