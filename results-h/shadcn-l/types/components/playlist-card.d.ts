import type { ReactNode } from "react";
export interface PlaylistCardModel {
    id: string;
    title: string;
    summary: string;
    /** Shown as a pill in the header. */
    status: "draft" | "active" | "archived";
    updatedAt: string;
}
export interface PlaylistCardProps {
    item: PlaylistCardModel;
    size?: "sm" | "md" | "lg";
    /** Rendered along the bottom edge, typically a row of actions. */
    footer?: ReactNode;
    onOpen?: () => void;
}
export declare function PlaylistCard({ item, size, footer, onOpen }: PlaylistCardProps): import("react").JSX.Element;
