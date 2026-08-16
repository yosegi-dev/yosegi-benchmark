import type { ReactNode } from "react";
export interface NotificationListEntry {
    id: string;
    primary: string;
    secondary?: string;
}
export interface NotificationListProps {
    entries: NotificationListEntry[];
    /** Shown in place of the rows when there is nothing to list. */
    emptyLabel?: string;
    /** Rendered at the right of every row. */
    accessory?: ReactNode;
    /** Removes the rules between rows. */
    seamless?: boolean;
    onEntrySelect?: (id: string) => void;
}
export declare function NotificationList({ entries, emptyLabel, accessory, seamless, onEntrySelect, }: NotificationListProps): import("react").JSX.Element;
