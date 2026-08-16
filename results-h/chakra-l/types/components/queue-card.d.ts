import type { ReactNode } from "react";
export interface QueueCardProps {
    /** Title of the queue card. */
    heading: string;
    /** One line under the title. */
    subheading?: string;
    /** The card's rows. */
    items: ReactNode;
    /** Rendered at the bottom of the card. */
    footer?: ReactNode;
    /** Accent tints the card; plain leaves it neutral. */
    tone?: "plain" | "accent";
}
export declare function QueueCard({ heading, subheading, items, footer, tone }: QueueCardProps): import("react").JSX.Element;
