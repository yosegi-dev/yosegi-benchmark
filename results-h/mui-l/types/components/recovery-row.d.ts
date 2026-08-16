import type { ReactNode } from "react";
export interface RecoveryRowItem {
    id: string;
    /** Headline of the row. */
    title: string;
    /** Second line, e.g. a handle or a timestamp. */
    detail: string;
    /** Leading image; the row falls back to text alignment without one. */
    avatarUrl?: string;
    /** Draws the row in the unread weight. */
    unread?: boolean;
}
export interface RecoveryRowProps {
    /** The record this row stands for. */
    item: RecoveryRowItem;
    /** Visual weight of the row. */
    emphasis?: "default" | "muted" | "strong";
    /** Drawn at the trailing edge, e.g. an overflow menu. */
    trailing?: ReactNode;
    /** True when this is the active row in its list. */
    selected?: boolean;
    /** Fired with the record id. */
    onSelect?: (id: string) => void;
}
export declare function RecoveryRow({ item, emphasis, trailing, selected, onSelect }: RecoveryRowProps): import("react").JSX.Element;
