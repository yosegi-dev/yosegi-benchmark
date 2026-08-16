import type { ReactNode } from "react";
export interface CollectionCardProps {
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
export declare function CollectionCard({ title, body, image, tags, onDismiss }: CollectionCardProps): import("react").JSX.Element;
