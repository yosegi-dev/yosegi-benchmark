import type { ReactNode } from "react";
export interface ShareSheetProps {
    /** Title shown in the sheet header. */
    title: string;
    /** Whether the sheet is on screen. */
    opened: boolean;
    /** Slot for the sheet contents. */
    content: ReactNode;
    onDismiss: () => void;
    size?: "sm" | "md" | "lg";
}
export declare function ShareSheet({ title, opened, content, onDismiss, size }: ShareSheetProps): import("react").JSX.Element;
