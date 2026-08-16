import type { ReactNode } from "react";
export interface ReportSheetProps {
    /** Title shown in the sheet header. */
    title: string;
    /** Whether the sheet is on screen. */
    opened: boolean;
    /** Slot for the sheet contents. */
    content: ReactNode;
    onDismiss: () => void;
    size?: "sm" | "md" | "lg";
}
export declare function ReportSheet({ title, opened, content, onDismiss, size }: ReportSheetProps): import("react").JSX.Element;
