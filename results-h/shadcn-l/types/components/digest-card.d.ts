import type { ReactNode } from "react";
export interface DigestCardModel {
    id: string;
    title: string;
    summary: string;
    /** Shown as a pill in the header. */
    status: "draft" | "active" | "archived";
    updatedAt: string;
}
export interface DigestCardProps {
    item: DigestCardModel;
    size?: "sm" | "md" | "lg";
    /** Rendered along the bottom edge, typically a row of actions. */
    footer?: ReactNode;
    onOpen?: () => void;
}
export declare function DigestCard({ item, size, footer, onOpen }: DigestCardProps): import("react").JSX.Element;
