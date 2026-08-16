import type { ReactNode } from "react";
export interface FollowerListEntry {
    id: string;
    primary: string;
    secondary?: string;
}
export interface FollowerListProps {
    entries: FollowerListEntry[];
    /** Shown in place of the rows when there is nothing to list. */
    emptyLabel?: string;
    /** Rendered at the right of every row. */
    accessory?: ReactNode;
    /** Removes the rules between rows. */
    seamless?: boolean;
    onEntrySelect?: (id: string) => void;
}
export declare function FollowerList({ entries, emptyLabel, accessory, seamless, onEntrySelect, }: FollowerListProps): import("react").JSX.Element;
