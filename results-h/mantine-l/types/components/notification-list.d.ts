export interface NotificationListEntry {
    id: string;
    primary: string;
    secondary?: string;
}
export interface NotificationListProps {
    entries: NotificationListEntry[];
    /** Shown in place of the list when it is empty. */
    emptyLabel?: string;
    /** Draws a rule between entries. */
    dividers?: boolean;
    onEntrySelect?: (id: string) => void;
}
export declare function NotificationList({ entries, emptyLabel, dividers, onEntrySelect, }: NotificationListProps): import("react").JSX.Element;
