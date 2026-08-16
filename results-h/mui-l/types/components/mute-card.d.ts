import type { ReactNode } from "react";
export interface MuteCardEntry {
    id: string;
    /** Text of the entry. */
    label: string;
    /** Right-aligned value, already formatted. */
    value: string;
}
export interface MuteCardProps {
    /** Card heading. */
    heading: string;
    /** Rows the card lists. */
    entries: MuteCardEntry[];
    /** Drawn to the right of the heading. */
    action?: ReactNode;
    /** Drops the card's border for use inside another surface. */
    flush?: boolean;
}
export declare function MuteCard({ heading, entries, action, flush }: MuteCardProps): import("react").JSX.Element;
