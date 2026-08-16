export interface FollowingListEntry {
    id: string;
    primary: string;
    secondary?: string;
}
export interface FollowingListProps {
    entries: FollowingListEntry[];
    /** Shown in place of the list when it is empty. */
    emptyLabel?: string;
    /** Draws a rule between entries. */
    dividers?: boolean;
    onEntrySelect?: (id: string) => void;
}
export declare function FollowingList({ entries, emptyLabel, dividers, onEntrySelect, }: FollowingListProps): import("react").JSX.Element;
