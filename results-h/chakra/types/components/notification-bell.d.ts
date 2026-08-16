import type { ActionTone } from "~/models";
export interface NotificationBellProps {
    /** Number of unread notifications; the badge is hidden when this is 0. */
    unreadCount: number;
    /** Picks the colour palette of the button and the badge. */
    tone?: ActionTone;
    /** Fired when the bell is activated. */
    onBellPress?: () => void;
}
export declare function NotificationBell({ unreadCount, tone, onBellPress, }: NotificationBellProps): import("react").JSX.Element;
