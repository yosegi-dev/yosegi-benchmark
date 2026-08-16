import type { ReactNode } from "react";
export interface TopicListEntry {
    id: string;
    primary: string;
    secondary?: string;
}
export interface TopicListProps {
    entries: TopicListEntry[];
    /** Shown in place of the rows when there is nothing to list. */
    emptyLabel?: string;
    /** Rendered at the right of every row. */
    accessory?: ReactNode;
    /** Removes the rules between rows. */
    seamless?: boolean;
    onEntrySelect?: (id: string) => void;
}
export declare function TopicList({ entries, emptyLabel, accessory, seamless, onEntrySelect, }: TopicListProps): import("react").JSX.Element;
