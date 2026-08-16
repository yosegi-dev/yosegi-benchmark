export interface TopicListEntry {
    id: string;
    primary: string;
    secondary?: string;
}
export interface TopicListProps {
    entries: TopicListEntry[];
    /** Shown in place of the list when it is empty. */
    emptyLabel?: string;
    /** Draws a rule between entries. */
    dividers?: boolean;
    onEntrySelect?: (id: string) => void;
}
export declare function TopicList({ entries, emptyLabel, dividers, onEntrySelect, }: TopicListProps): import("react").JSX.Element;
