export interface FollowerListEntry {
    id: string;
    primary: string;
    secondary?: string;
}
export interface FollowerListProps {
    entries: FollowerListEntry[];
    /** Shown in place of the list when it is empty. */
    emptyLabel?: string;
    /** Draws a rule between entries. */
    dividers?: boolean;
    onEntrySelect?: (id: string) => void;
}
export declare function FollowerList({ entries, emptyLabel, dividers, onEntrySelect, }: FollowerListProps): import("react").JSX.Element;
