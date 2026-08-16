import type { ReactNode } from "react";
export interface PodcastCardModel {
    id: string;
    title: string;
    summary: string;
    /** Shown as a pill in the header. */
    status: "draft" | "active" | "archived";
    updatedAt: string;
}
export interface PodcastCardProps {
    item: PodcastCardModel;
    size?: "sm" | "md" | "lg";
    /** Rendered along the bottom edge, typically a row of actions. */
    footer?: ReactNode;
    onOpen?: () => void;
}
export declare function PodcastCard({ item, size, footer, onOpen }: PodcastCardProps): import("react").JSX.Element;
