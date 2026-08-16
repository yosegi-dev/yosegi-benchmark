import type { ReactNode } from "react";
export interface BlockListEntry {
    id: string;
    /** First line. */
    primary: string;
    /** Second line. */
    secondary?: string;
}
export interface BlockListProps {
    /** Title above the list. */
    title: string;
    /** Rows to draw. */
    entries: BlockListEntry[];
    /** Fired with the id of the row that was clicked. */
    onEntrySelect?: (id: string) => void;
    /** Drawn under the last row. */
    footer?: ReactNode;
    /** Copy shown when there are no rows. */
    emptyLabel?: string;
}
export declare function BlockList({ title, entries, onEntrySelect, footer, emptyLabel }: BlockListProps): import("react").JSX.Element;
