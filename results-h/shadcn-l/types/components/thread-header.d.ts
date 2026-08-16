import type { ReactNode } from "react";
export interface ThreadHeaderProps {
    title: string;
    /** Second line, e.g. a post count or a member count. */
    subtitle?: string;
    /** Rendered to the left of the title. */
    avatar?: ReactNode;
    /** Rendered on the right, e.g. an overflow menu. */
    actions?: ReactNode;
    /** Pins the header to the top of its scroll container. */
    sticky?: boolean;
}
export declare function ThreadHeader({ title, subtitle, avatar, actions, sticky }: ThreadHeaderProps): import("react").JSX.Element;
