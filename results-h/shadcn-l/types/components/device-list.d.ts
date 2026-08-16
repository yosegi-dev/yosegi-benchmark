import type { ReactNode } from "react";
export interface DeviceListEntry {
    id: string;
    primary: string;
    secondary?: string;
}
export interface DeviceListProps {
    entries: DeviceListEntry[];
    /** Shown in place of the rows when there is nothing to list. */
    emptyLabel?: string;
    /** Rendered at the right of every row. */
    accessory?: ReactNode;
    /** Removes the rules between rows. */
    seamless?: boolean;
    onEntrySelect?: (id: string) => void;
}
export declare function DeviceList({ entries, emptyLabel, accessory, seamless, onEntrySelect, }: DeviceListProps): import("react").JSX.Element;
