import type { ReactNode } from "react";
export interface ModerationCardItem {
    id: string;
    title: string;
    description?: string;
    /** Shown in the corner when set. */
    count?: number;
}
export interface ModerationCardProps {
    item: ModerationCardItem;
    /** Surface weight of the card. */
    variant?: "plain" | "outlined" | "elevated";
    /** Slot rendered along the bottom edge. */
    footer?: ReactNode;
    onOpen?: () => void;
}
export declare function ModerationCard({ item, variant, footer, onOpen }: ModerationCardProps): import("react").JSX.Element;
