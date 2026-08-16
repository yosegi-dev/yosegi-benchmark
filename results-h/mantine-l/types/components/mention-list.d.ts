export interface MentionListEntry {
    id: string;
    primary: string;
    secondary?: string;
}
export interface MentionListProps {
    entries: MentionListEntry[];
    /** Shown in place of the list when it is empty. */
    emptyLabel?: string;
    /** Draws a rule between entries. */
    dividers?: boolean;
    onEntrySelect?: (id: string) => void;
}
export declare function MentionList({ entries, emptyLabel, dividers, onEntrySelect, }: MentionListProps): import("react").JSX.Element;
