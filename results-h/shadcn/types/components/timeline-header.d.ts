import type { ReactNode } from "react";
import type { AuthorModel } from "~/models";
export interface TimelineHeaderProps {
    /** The signed-in user, shown as the avatar on the left. */
    viewer: AuthorModel;
    /** Slot for the search control. */
    search: ReactNode;
    /** Slot for the notification control. */
    notifications: ReactNode;
    /** Called when the viewer's own avatar is pressed. */
    onViewerPress?: () => void;
}
export declare function TimelineHeader({ viewer, search, notifications, onViewerPress, }: TimelineHeaderProps): import("react").JSX.Element;
