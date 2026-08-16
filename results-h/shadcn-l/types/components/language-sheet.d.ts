import type { ReactNode } from "react";
export interface LanguageSheetProps {
    open: boolean;
    title: string;
    /** The sheet's contents. */
    children: ReactNode;
    /** Which edge the sheet slides in from. */
    side?: "bottom" | "right";
    onClose: () => void;
}
export declare function LanguageSheet({ open, title, children, side, onClose }: LanguageSheetProps): import("react").JSX.Element | null;
