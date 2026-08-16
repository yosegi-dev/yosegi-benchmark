import type { ReactNode } from "react";
export interface ReportSheetProps {
    open: boolean;
    title: string;
    /** The sheet's contents. */
    children: ReactNode;
    /** Which edge the sheet slides in from. */
    side?: "bottom" | "right";
    onClose: () => void;
}
export declare function ReportSheet({ open, title, children, side, onClose }: ReportSheetProps): import("react").JSX.Element | null;
