import type { ReactNode } from "react";
export interface MediaListEntry {
    id: string;
    primary: string;
    secondary?: string;
}
export interface MediaListProps {
    entries: MediaListEntry[];
    /** Shown in place of the rows when there is nothing to list. */
    emptyLabel?: string;
    /** Rendered at the right of every row. */
    accessory?: ReactNode;
    /** Removes the rules between rows. */
    seamless?: boolean;
    onEntrySelect?: (id: string) => void;
}
export declare function MediaList({ entries, emptyLabel, accessory, seamless, onEntrySelect, }: MediaListProps): import("react").JSX.Element;
