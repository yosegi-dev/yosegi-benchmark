import type { ReactNode } from "react";
export interface DeviceCardEntry {
    id: string;
    /** Text of the entry. */
    label: string;
    /** Right-aligned value, already formatted. */
    value: string;
}
export interface DeviceCardProps {
    /** Card heading. */
    heading: string;
    /** Rows the card lists. */
    entries: DeviceCardEntry[];
    /** Drawn to the right of the heading. */
    action?: ReactNode;
    /** Drops the card's border for use inside another surface. */
    flush?: boolean;
}
export declare function DeviceCard({ heading, entries, action, flush }: DeviceCardProps): import("react").JSX.Element;
