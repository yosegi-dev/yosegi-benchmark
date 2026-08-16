import type { ReactNode } from "react";
export interface ProfileCardItem {
    id: string;
    title: string;
    description?: string;
    /** Shown in the corner when set. */
    count?: number;
}
export interface ProfileCardProps {
    item: ProfileCardItem;
    /** Surface weight of the card. */
    variant?: "plain" | "outlined" | "elevated";
    /** Slot rendered along the bottom edge. */
    footer?: ReactNode;
    onOpen?: () => void;
}
export declare function ProfileCard({ item, variant, footer, onOpen }: ProfileCardProps): import("react").JSX.Element;
