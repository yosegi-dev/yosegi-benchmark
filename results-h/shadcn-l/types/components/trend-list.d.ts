import type { ReactNode } from "react";
export interface TrendListEntry {
    id: string;
    primary: string;
    secondary?: string;
}
export interface TrendListProps {
    entries: TrendListEntry[];
    /** Shown in place of the rows when there is nothing to list. */
    emptyLabel?: string;
    /** Rendered at the right of every row. */
    accessory?: ReactNode;
    /** Removes the rules between rows. */
    seamless?: boolean;
    onEntrySelect?: (id: string) => void;
}
export declare function TrendList({ entries, emptyLabel, accessory, seamless, onEntrySelect, }: TrendListProps): import("react").JSX.Element;
