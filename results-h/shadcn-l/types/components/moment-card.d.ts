import type { ReactNode } from "react";
export interface MomentCardModel {
    id: string;
    title: string;
    summary: string;
    /** Shown as a pill in the header. */
    status: "draft" | "active" | "archived";
    updatedAt: string;
}
export interface MomentCardProps {
    item: MomentCardModel;
    size?: "sm" | "md" | "lg";
    /** Rendered along the bottom edge, typically a row of actions. */
    footer?: ReactNode;
    onOpen?: () => void;
}
export declare function MomentCard({ item, size, footer, onOpen }: MomentCardProps): import("react").JSX.Element;
