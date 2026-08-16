import type { ReactNode } from "react";
export interface PaymentCardProps {
    /** Card title. */
    title: string;
    /** Supporting copy under the title. */
    description?: string;
    /** Palette the card leans on. */
    tone?: "neutral" | "brand" | "warning";
    /** Labels drawn under the description. */
    tags?: string[];
    /** Drawn above the title, e.g. an image or a chart. */
    media?: ReactNode;
    /** Drawn at the bottom edge. */
    footer?: ReactNode;
    onOpen?: () => void;
}
export declare function PaymentCard({ title, description, tone, tags, media, footer, onOpen }: PaymentCardProps): import("react").JSX.Element;
