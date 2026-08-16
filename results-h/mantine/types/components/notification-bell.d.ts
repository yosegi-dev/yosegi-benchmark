import type { ActionTone } from "~/models";
export interface NotificationBellProps {
    /** Badge count; the badge is hidden at 0. */
    unreadCount: number;
    /** Colour intent of the control. */
    tone?: ActionTone;
    /** Fired when the bell is activated. */
    onBellPress?: () => void;
}
export declare function NotificationBell({ unreadCount, tone, onBellPress, }: NotificationBellProps): import("react").JSX.Element;
