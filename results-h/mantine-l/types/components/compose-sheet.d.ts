import type { ReactNode } from "react";
export interface ComposeSheetProps {
    /** Title shown in the sheet header. */
    title: string;
    /** Whether the sheet is on screen. */
    opened: boolean;
    /** Slot for the sheet contents. */
    content: ReactNode;
    onDismiss: () => void;
    size?: "sm" | "md" | "lg";
}
export declare function ComposeSheet({ title, opened, content, onDismiss, size }: ComposeSheetProps): import("react").JSX.Element;
