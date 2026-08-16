import type { ReactNode } from "react";
export interface CommunityCardProps {
    /** Title of the community card. */
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
export declare function CommunityCard({ heading, subheading, items, footer, tone }: CommunityCardProps): import("react").JSX.Element;
