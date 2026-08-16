export interface BookmarkListEntry {
    id: string;
    primary: string;
    secondary?: string;
}
export interface BookmarkListProps {
    entries: BookmarkListEntry[];
    /** Shown in place of the list when it is empty. */
    emptyLabel?: string;
    /** Draws a rule between entries. */
    dividers?: boolean;
    onEntrySelect?: (id: string) => void;
}
export declare function BookmarkList({ entries, emptyLabel, dividers, onEntrySelect, }: BookmarkListProps): import("react").JSX.Element;
