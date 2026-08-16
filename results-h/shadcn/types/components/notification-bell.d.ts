import type { ActionTone } from "~/models";
export interface NotificationBellProps {
    /** Rendered as a badge; a value of 0 hides the badge entirely. */
    unreadCount: number;
    /** Product tone applied to the icon colour. */
    tone?: ActionTone;
    onBellPress?: () => void;
}
export declare function NotificationBell({ unreadCount, tone, onBellPress, }: NotificationBellProps): import("react").JSX.Element;
