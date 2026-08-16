import type { ReactNode } from "react";
import type { AuthorModel } from "~/models";
export interface TimelineHeaderProps {
    /** The signed-in user, shown at the left edge. */
    viewer: AuthorModel;
    /** Slot for the search control. */
    search: ReactNode;
    /** Slot for the notification control. */
    notifications: ReactNode;
    /** Fired when the viewer's avatar is activated. */
    onViewerPress?: () => void;
}
export declare function TimelineHeader({ viewer, search, notifications, onViewerPress }: TimelineHeaderProps): import("react").JSX.Element;
