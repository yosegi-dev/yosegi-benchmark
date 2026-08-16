export interface SessionListEntry {
    id: string;
    primary: string;
    secondary?: string;
}
export interface SessionListProps {
    entries: SessionListEntry[];
    /** Shown in place of the list when it is empty. */
    emptyLabel?: string;
    /** Draws a rule between entries. */
    dividers?: boolean;
    onEntrySelect?: (id: string) => void;
}
export declare function SessionList({ entries, emptyLabel, dividers, onEntrySelect, }: SessionListProps): import("react").JSX.Element;
