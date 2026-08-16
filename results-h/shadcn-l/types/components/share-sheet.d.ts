import type { ReactNode } from "react";
export interface ShareSheetProps {
    open: boolean;
    title: string;
    /** The sheet's contents. */
    children: ReactNode;
    /** Which edge the sheet slides in from. */
    side?: "bottom" | "right";
    onClose: () => void;
}
export declare function ShareSheet({ open, title, children, side, onClose }: ShareSheetProps): import("react").JSX.Element | null;
