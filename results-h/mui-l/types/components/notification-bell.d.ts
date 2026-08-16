import type { ActionTone } from "~/models";
export interface NotificationBellProps {
    /** Number shown on the badge; zero hides the badge. */
    unreadCount: number;
    /** Palette the icon and badge take; `quiet` keeps the bell neutral. */
    tone?: ActionTone;
    onBellPress?: () => void;
}
export declare function NotificationBell({ unreadCount, tone, onBellPress }: NotificationBellProps): import("react").JSX.Element;
