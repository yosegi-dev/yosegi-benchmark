import type { ReactNode } from "react";
export interface InviteRowProps {
    /** Primary line of the row. */
    title: string;
    /** Secondary line, shown under the title. */
    subtitle?: string;
    /** Right-aligned metadata, e.g. a timestamp. */
    meta?: string;
    /** Slot at the start of the row. */
    leading?: ReactNode;
    /** Slot at the end of the row. */
    trailing?: ReactNode;
    /** Emphasises the row and shows the unread marker. */
    unread?: boolean;
    onSelect?: () => void;
}
export declare function InviteRow({ title, subtitle, meta, leading, trailing, unread, onSelect, }: InviteRowProps): import("react").JSX.Element;
