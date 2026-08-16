export interface MediaListEntry {
    id: string;
    primary: string;
    secondary?: string;
}
export interface MediaListProps {
    entries: MediaListEntry[];
    /** Shown in place of the list when it is empty. */
    emptyLabel?: string;
    /** Draws a rule between entries. */
    dividers?: boolean;
    onEntrySelect?: (id: string) => void;
}
export declare function MediaList({ entries, emptyLabel, dividers, onEntrySelect, }: MediaListProps): import("react").JSX.Element;
