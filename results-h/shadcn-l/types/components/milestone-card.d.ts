import type { ReactNode } from "react";
export interface MilestoneCardModel {
    id: string;
    title: string;
    summary: string;
    /** Shown as a pill in the header. */
    status: "draft" | "active" | "archived";
    updatedAt: string;
}
export interface MilestoneCardProps {
    item: MilestoneCardModel;
    size?: "sm" | "md" | "lg";
    /** Rendered along the bottom edge, typically a row of actions. */
    footer?: ReactNode;
    onOpen?: () => void;
}
export declare function MilestoneCard({ item, size, footer, onOpen }: MilestoneCardProps): import("react").JSX.Element;
