import type { ReactNode } from "react";
export interface ModerationListEntry {
    id: string;
    /** First line. */
    primary: string;
    /** Second line. */
    secondary?: string;
}
export interface ModerationListProps {
    /** Title above the list. */
    title: string;
    /** Rows to draw. */
    entries: ModerationListEntry[];
    /** Fired with the id of the row that was clicked. */
    onEntrySelect?: (id: string) => void;
    /** Drawn under the last row. */
    footer?: ReactNode;
    /** Copy shown when there are no rows. */
    emptyLabel?: string;
}
export declare function ModerationList({ title, entries, onEntrySelect, footer, emptyLabel }: ModerationListProps): import("react").JSX.Element;
