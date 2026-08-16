import type { ReactNode } from "react";
import type { TrendModel } from "~/models";
export interface NotificationHighlightProps {
    /** The trend this notification highlight is built from. */
    trend: TrendModel;
    /** Position in the surrounding list; drawn as a leading badge. */
    rank?: number;
    /** Rendered at the end of the row. */
    action?: ReactNode;
    /** Draws the category as a second badge. */
    showCategory?: boolean;
}
export declare function NotificationHighlight({ trend, rank, action, showCategory }: NotificationHighlightProps): import("react").JSX.Element;
