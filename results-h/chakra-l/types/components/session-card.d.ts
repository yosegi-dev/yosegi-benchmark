import type { ReactNode } from "react";
export interface SessionCardProps {
    /** Title of the session card. */
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
export declare function SessionCard({ heading, subheading, items, footer, tone }: SessionCardProps): import("react").JSX.Element;
