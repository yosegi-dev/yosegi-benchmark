import type { ReactNode } from "react";
export interface EmojiCardProps {
    /** Title of the emoji card. */
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
export declare function EmojiCard({ heading, subheading, items, footer, tone }: EmojiCardProps): import("react").JSX.Element;
