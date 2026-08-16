import type { ReactNode } from "react";
import type { AuthorModel } from "~/models";
export interface TimelineHeaderProps {
    /** The signed-in user, shown as the avatar button on the left. */
    viewer: AuthorModel;
    /** Slot for the search field. */
    search: ReactNode;
    /** Slot for the notification bell. */
    notifications: ReactNode;
    /** Fired when the viewer's own avatar is activated. */
    onViewerPress?: () => void;
}
export declare function TimelineHeader({ viewer, search, notifications, onViewerPress, }: TimelineHeaderProps): import("react").JSX.Element;
