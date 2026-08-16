import type { ReactNode } from "react";
export interface CollectionCardModel {
    id: string;
    title: string;
    summary: string;
    /** Shown as a pill in the header. */
    status: "draft" | "active" | "archived";
    updatedAt: string;
}
export interface CollectionCardProps {
    item: CollectionCardModel;
    size?: "sm" | "md" | "lg";
    /** Rendered along the bottom edge, typically a row of actions. */
    footer?: ReactNode;
    onOpen?: () => void;
}
export declare function CollectionCard({ item, size, footer, onOpen }: CollectionCardProps): import("react").JSX.Element;
