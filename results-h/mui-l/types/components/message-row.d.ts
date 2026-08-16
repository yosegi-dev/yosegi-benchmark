import type { ReactNode } from "react";
export interface MessageRowItem {
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
export interface MessageRowProps {
    /** The record this row stands for. */
    item: MessageRowItem;
    /** Visual weight of the row. */
    emphasis?: "default" | "muted" | "strong";
    /** Drawn at the trailing edge, e.g. an overflow menu. */
    trailing?: ReactNode;
    /** True when this is the active row in its list. */
    selected?: boolean;
    /** Fired with the record id. */
    onSelect?: (id: string) => void;
}
export declare function MessageRow({ item, emphasis, trailing, selected, onSelect }: MessageRowProps): import("react").JSX.Element;
