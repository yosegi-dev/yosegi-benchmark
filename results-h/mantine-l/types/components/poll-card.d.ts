import type { ReactNode } from "react";
export interface PollCardItem {
    id: string;
    title: string;
    description?: string;
    /** Shown in the corner when set. */
    count?: number;
}
export interface PollCardProps {
    item: PollCardItem;
    /** Surface weight of the card. */
    variant?: "plain" | "outlined" | "elevated";
    /** Slot rendered along the bottom edge. */
    footer?: ReactNode;
    onOpen?: () => void;
}
export declare function PollCard({ item, variant, footer, onOpen }: PollCardProps): import("react").JSX.Element;
