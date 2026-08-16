import type { ReactNode } from "react";
export interface NearbyCardEntry {
    id: string;
    /** Text of the entry. */
    label: string;
    /** Right-aligned value, already formatted. */
    value: string;
}
export interface NearbyCardProps {
    /** Card heading. */
    heading: string;
    /** Rows the card lists. */
    entries: NearbyCardEntry[];
    /** Drawn to the right of the heading. */
    action?: ReactNode;
    /** Drops the card's border for use inside another surface. */
    flush?: boolean;
}
export declare function NearbyCard({ heading, entries, action, flush }: NearbyCardProps): import("react").JSX.Element;
