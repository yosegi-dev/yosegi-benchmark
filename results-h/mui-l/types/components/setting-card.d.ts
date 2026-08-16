import type { ReactNode } from "react";
export interface SettingCardEntry {
    id: string;
    /** Text of the entry. */
    label: string;
    /** Right-aligned value, already formatted. */
    value: string;
}
export interface SettingCardProps {
    /** Card heading. */
    heading: string;
    /** Rows the card lists. */
    entries: SettingCardEntry[];
    /** Drawn to the right of the heading. */
    action?: ReactNode;
    /** Drops the card's border for use inside another surface. */
    flush?: boolean;
}
export declare function SettingCard({ heading, entries, action, flush }: SettingCardProps): import("react").JSX.Element;
