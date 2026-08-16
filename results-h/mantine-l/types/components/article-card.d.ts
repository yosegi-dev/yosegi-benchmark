import type { ReactNode } from "react";
export interface ArticleCardItem {
    id: string;
    title: string;
    description?: string;
    /** Shown in the corner when set. */
    count?: number;
}
export interface ArticleCardProps {
    item: ArticleCardItem;
    /** Surface weight of the card. */
    variant?: "plain" | "outlined" | "elevated";
    /** Slot rendered along the bottom edge. */
    footer?: ReactNode;
    onOpen?: () => void;
}
export declare function ArticleCard({ item, variant, footer, onOpen }: ArticleCardProps): import("react").JSX.Element;
