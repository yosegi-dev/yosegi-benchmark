import type { ReactNode } from "react";
export interface DraftListEntry {
    id: string;
    /** First line. */
    primary: string;
    /** Second line. */
    secondary?: string;
}
export interface DraftListProps {
    /** Title above the list. */
    title: string;
    /** Rows to draw. */
    entries: DraftListEntry[];
    /** Fired with the id of the row that was clicked. */
    onEntrySelect?: (id: string) => void;
    /** Drawn under the last row. */
    footer?: ReactNode;
    /** Copy shown when there are no rows. */
    emptyLabel?: string;
}
export declare function DraftList({ title, entries, onEntrySelect, footer, emptyLabel }: DraftListProps): import("react").JSX.Element;
