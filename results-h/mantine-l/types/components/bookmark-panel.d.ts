import type { ReactNode } from "react";
export interface BookmarkPanelProps {
    title: string;
    /** The panel contents. */
    children: ReactNode;
    /** Slot along the bottom edge. */
    footer?: ReactNode;
    /** Covers the panel while its data is in flight. */
    loading?: boolean;
}
export declare function BookmarkPanel({ title, children, footer, loading }: BookmarkPanelProps): import("react").JSX.Element;
