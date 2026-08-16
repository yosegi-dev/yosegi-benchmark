import type { ReactNode } from "react";
import type { TrendModel } from "~/models";
export interface QueueHighlightProps {
    /** The trend this queue highlight is built from. */
    trend: TrendModel;
    /** Position in the surrounding list; drawn as a leading badge. */
    rank?: number;
    /** Rendered at the end of the row. */
    action?: ReactNode;
    /** Draws the category as a second badge. */
    showCategory?: boolean;
}
export declare function QueueHighlight({ trend, rank, action, showCategory }: QueueHighlightProps): import("react").JSX.Element;
