import type { ReactNode } from "react";
export interface QuotaEmptyStateProps {
    /** Headline shown when there is no quota to display. */
    title: string;
    /** One line telling the reader what to do about it. */
    description?: string;
    /** Rendered under the description — usually a call to action. */
    action?: ReactNode;
    /** Controls the spacing and the icon size. */
    size?: "sm" | "md" | "lg";
}
export declare function QuotaEmptyState({ title, description, action, size }: QuotaEmptyStateProps): import("react").JSX.Element;
