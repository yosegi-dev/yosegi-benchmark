import type { ReactNode } from "react";
export interface MessageListEntry {
    id: string;
    primary: string;
    secondary?: string;
}
export interface MessageListProps {
    entries: MessageListEntry[];
    /** Shown in place of the rows when there is nothing to list. */
    emptyLabel?: string;
    /** Rendered at the right of every row. */
    accessory?: ReactNode;
    /** Removes the rules between rows. */
    seamless?: boolean;
    onEntrySelect?: (id: string) => void;
}
export declare function MessageList({ entries, emptyLabel, accessory, seamless, onEntrySelect, }: MessageListProps): import("react").JSX.Element;
