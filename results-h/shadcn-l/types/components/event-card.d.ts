import type { ReactNode } from "react";
export interface EventCardModel {
    id: string;
    title: string;
    summary: string;
    /** Shown as a pill in the header. */
    status: "draft" | "active" | "archived";
    updatedAt: string;
}
export interface EventCardProps {
    item: EventCardModel;
    size?: "sm" | "md" | "lg";
    /** Rendered along the bottom edge, typically a row of actions. */
    footer?: ReactNode;
    onOpen?: () => void;
}
export declare function EventCard({ item, size, footer, onOpen }: EventCardProps): import("react").JSX.Element;
