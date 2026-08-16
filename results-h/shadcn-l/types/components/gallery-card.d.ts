import type { ReactNode } from "react";
export interface GalleryCardModel {
    id: string;
    title: string;
    summary: string;
    /** Shown as a pill in the header. */
    status: "draft" | "active" | "archived";
    updatedAt: string;
}
export interface GalleryCardProps {
    item: GalleryCardModel;
    size?: "sm" | "md" | "lg";
    /** Rendered along the bottom edge, typically a row of actions. */
    footer?: ReactNode;
    onOpen?: () => void;
}
export declare function GalleryCard({ item, size, footer, onOpen }: GalleryCardProps): import("react").JSX.Element;
