import type { ReactNode } from "react";
export interface ComposeSheetProps {
    open: boolean;
    title: string;
    /** The sheet's contents. */
    children: ReactNode;
    /** Which edge the sheet slides in from. */
    side?: "bottom" | "right";
    onClose: () => void;
}
export declare function ComposeSheet({ open, title, children, side, onClose }: ComposeSheetProps): import("react").JSX.Element | null;
