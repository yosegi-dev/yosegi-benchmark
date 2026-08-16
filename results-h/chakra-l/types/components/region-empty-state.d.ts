import type { ReactNode } from "react";
export interface RegionEmptyStateProps {
    /** Headline shown when there is no region to display. */
    title: string;
    /** One line telling the reader what to do about it. */
    description?: string;
    /** Rendered under the description — usually a call to action. */
    action?: ReactNode;
    /** Controls the spacing and the icon size. */
    size?: "sm" | "md" | "lg";
}
export declare function RegionEmptyState({ title, description, action, size }: RegionEmptyStateProps): import("react").JSX.Element;
