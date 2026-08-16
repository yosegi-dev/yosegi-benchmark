import type { ReactNode } from "react";
export interface ReportRowEntry {
    id: string;
    label: string;
    /** Second line, usually a handle or a path. */
    detail?: string;
}
export interface ReportRowProps {
    entry: ReportRowEntry;
    /** Read state of the entry. */
    state: "read" | "unread" | "muted";
    /** Slot for the control on the right. */
    action?: ReactNode;
    /** Shown at the far right, e.g. a relative time. */
    timestamp?: string;
    onOpen?: () => void;
}
export declare function ReportRow({ entry, state, action, timestamp, onOpen }: ReportRowProps): import("react").JSX.Element;
