import type { ReactNode } from "react";
export interface CommunityCardItem {
    id: string;
    title: string;
    description?: string;
    /** Shown in the corner when set. */
    count?: number;
}
export interface CommunityCardProps {
    item: CommunityCardItem;
    /** Surface weight of the card. */
    variant?: "plain" | "outlined" | "elevated";
    /** Slot rendered along the bottom edge. */
    footer?: ReactNode;
    onOpen?: () => void;
}
export declare function CommunityCard({ item, variant, footer, onOpen }: CommunityCardProps): import("react").JSX.Element;
