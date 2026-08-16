import type { ReactNode } from "react";
export interface PhotoCardItem {
    id: string;
    title: string;
    description?: string;
    /** Shown in the corner when set. */
    count?: number;
}
export interface PhotoCardProps {
    item: PhotoCardItem;
    /** Surface weight of the card. */
    variant?: "plain" | "outlined" | "elevated";
    /** Slot rendered along the bottom edge. */
    footer?: ReactNode;
    onOpen?: () => void;
}
export declare function PhotoCard({ item, variant, footer, onOpen }: PhotoCardProps): import("react").JSX.Element;
