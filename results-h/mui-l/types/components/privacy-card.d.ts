import type { ReactNode } from "react";
export interface PrivacyCardProps {
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
export declare function PrivacyCard({ title, description, tone, tags, media, footer, onOpen }: PrivacyCardProps): import("react").JSX.Element;
