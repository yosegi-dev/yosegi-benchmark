import type { ReactNode } from "react";
export interface SpaceCardModel {
    id: string;
    title: string;
    summary: string;
    /** Shown as a pill in the header. */
    status: "draft" | "active" | "archived";
    updatedAt: string;
}
export interface SpaceCardProps {
    item: SpaceCardModel;
    size?: "sm" | "md" | "lg";
    /** Rendered along the bottom edge, typically a row of actions. */
    footer?: ReactNode;
    onOpen?: () => void;
}
export declare function SpaceCard({ item, size, footer, onOpen }: SpaceCardProps): import("react").JSX.Element;
