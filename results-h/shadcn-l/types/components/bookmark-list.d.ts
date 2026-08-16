import type { ReactNode } from "react";
export interface BookmarkListEntry {
    id: string;
    primary: string;
    secondary?: string;
}
export interface BookmarkListProps {
    entries: BookmarkListEntry[];
    /** Shown in place of the rows when there is nothing to list. */
    emptyLabel?: string;
    /** Rendered at the right of every row. */
    accessory?: ReactNode;
    /** Removes the rules between rows. */
    seamless?: boolean;
    onEntrySelect?: (id: string) => void;
}
export declare function BookmarkList({ entries, emptyLabel, accessory, seamless, onEntrySelect, }: BookmarkListProps): import("react").JSX.Element;
