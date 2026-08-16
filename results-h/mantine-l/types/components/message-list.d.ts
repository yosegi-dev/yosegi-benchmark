export interface MessageListEntry {
    id: string;
    primary: string;
    secondary?: string;
}
export interface MessageListProps {
    entries: MessageListEntry[];
    /** Shown in place of the list when it is empty. */
    emptyLabel?: string;
    /** Draws a rule between entries. */
    dividers?: boolean;
    onEntrySelect?: (id: string) => void;
}
export declare function MessageList({ entries, emptyLabel, dividers, onEntrySelect, }: MessageListProps): import("react").JSX.Element;
