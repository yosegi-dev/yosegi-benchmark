import type { ReactNode } from "react";
export interface LinkCardProps {
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
export declare function LinkCard({ title, body, image, tags, onDismiss }: LinkCardProps): import("react").JSX.Element;
