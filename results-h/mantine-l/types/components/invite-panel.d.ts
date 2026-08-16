import type { ReactNode } from "react";
export interface InvitePanelProps {
    title: string;
    /** The panel contents. */
    children: ReactNode;
    /** Slot along the bottom edge. */
    footer?: ReactNode;
    /** Covers the panel while its data is in flight. */
    loading?: boolean;
}
export declare function InvitePanel({ title, children, footer, loading }: InvitePanelProps): import("react").JSX.Element;
