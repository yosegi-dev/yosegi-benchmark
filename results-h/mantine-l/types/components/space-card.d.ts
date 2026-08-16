import type { ReactNode } from "react";
export interface SpaceCardItem {
    id: string;
    title: string;
    description?: string;
    /** Shown in the corner when set. */
    count?: number;
}
export interface SpaceCardProps {
    item: SpaceCardItem;
    /** Surface weight of the card. */
    variant?: "plain" | "outlined" | "elevated";
    /** Slot rendered along the bottom edge. */
    footer?: ReactNode;
    onOpen?: () => void;
}
export declare function SpaceCard({ item, variant, footer, onOpen }: SpaceCardProps): import("react").JSX.Element;
