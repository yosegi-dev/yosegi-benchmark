import type { ReactNode } from "react";
export interface NotificationCardEntry {
    id: string;
    /** Text of the entry. */
    label: string;
    /** Right-aligned value, already formatted. */
    value: string;
}
export interface NotificationCardProps {
    /** Card heading. */
    heading: string;
    /** Rows the card lists. */
    entries: NotificationCardEntry[];
    /** Drawn to the right of the heading. */
    action?: ReactNode;
    /** Drops the card's border for use inside another surface. */
    flush?: boolean;
}
export declare function NotificationCard({ heading, entries, action, flush }: NotificationCardProps): import("react").JSX.Element;
