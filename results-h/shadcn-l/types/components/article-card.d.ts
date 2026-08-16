import type { ReactNode } from "react";
export interface ArticleCardModel {
    id: string;
    title: string;
    summary: string;
    /** Shown as a pill in the header. */
    status: "draft" | "active" | "archived";
    updatedAt: string;
}
export interface ArticleCardProps {
    item: ArticleCardModel;
    size?: "sm" | "md" | "lg";
    /** Rendered along the bottom edge, typically a row of actions. */
    footer?: ReactNode;
    onOpen?: () => void;
}
export declare function ArticleCard({ item, size, footer, onOpen }: ArticleCardProps): import("react").JSX.Element;
