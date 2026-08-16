import type { ReactNode } from "react";
export interface MediaCardEntry {
    id: string;
    /** Text of the entry. */
    label: string;
    /** Right-aligned value, already formatted. */
    value: string;
}
export interface MediaCardProps {
    /** Card heading. */
    heading: string;
    /** Rows the card lists. */
    entries: MediaCardEntry[];
    /** Drawn to the right of the heading. */
    action?: ReactNode;
    /** Drops the card's border for use inside another surface. */
    flush?: boolean;
}
export declare function MediaCard({ heading, entries, action, flush }: MediaCardProps): import("react").JSX.Element;
