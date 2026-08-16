import type { ReactNode } from "react";
export interface EventCardProps {
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
export declare function EventCard({ title, body, image, tags, onDismiss }: EventCardProps): import("react").JSX.Element;
