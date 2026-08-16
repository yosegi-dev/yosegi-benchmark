import type { ReactNode } from "react";
export interface HighlightCardProps {
    title: string;
    /** Slot for the card contents. */
    body: ReactNode;
    /** Cover image drawn above the title. */
    image?: string;
    /** Labels shown under the body. */
    tags?: string[];
    /** Shows the dismiss affordance when provided. */
    onDismiss?: () => void;
}
export declare function HighlightCard({ title, body, image, tags, onDismiss }: HighlightCardProps): import("react").JSX.Element;
