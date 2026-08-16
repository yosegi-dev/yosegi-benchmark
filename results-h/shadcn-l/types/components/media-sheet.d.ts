import type { ReactNode } from "react";
export interface MediaSheetProps {
    open: boolean;
    title: string;
    /** The sheet's contents. */
    children: ReactNode;
    /** Which edge the sheet slides in from. */
    side?: "bottom" | "right";
    onClose: () => void;
}
export declare function MediaSheet({ open, title, children, side, onClose }: MediaSheetProps): import("react").JSX.Element | null;
