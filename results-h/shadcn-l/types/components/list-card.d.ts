import type { ReactNode } from "react";
export interface ListCardModel {
    id: string;
    title: string;
    summary: string;
    /** Shown as a pill in the header. */
    status: "draft" | "active" | "archived";
    updatedAt: string;
}
export interface ListCardProps {
    item: ListCardModel;
    size?: "sm" | "md" | "lg";
    /** Rendered along the bottom edge, typically a row of actions. */
    footer?: ReactNode;
    onOpen?: () => void;
}
export declare function ListCard({ item, size, footer, onOpen }: ListCardProps): import("react").JSX.Element;
