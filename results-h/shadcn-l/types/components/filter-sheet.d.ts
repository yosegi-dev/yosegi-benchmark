import type { ReactNode } from "react";
export interface FilterSheetProps {
    open: boolean;
    title: string;
    /** The sheet's contents. */
    children: ReactNode;
    /** Which edge the sheet slides in from. */
    side?: "bottom" | "right";
    onClose: () => void;
}
export declare function FilterSheet({ open, title, children, side, onClose }: FilterSheetProps): import("react").JSX.Element | null;
