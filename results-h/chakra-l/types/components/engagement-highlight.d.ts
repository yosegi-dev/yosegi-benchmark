import type { ReactNode } from "react";
import type { TrendModel } from "~/models";
export interface EngagementHighlightProps {
    /** The trend this engagement highlight is built from. */
    trend: TrendModel;
    /** Position in the surrounding list; drawn as a leading badge. */
    rank?: number;
    /** Rendered at the end of the row. */
    action?: ReactNode;
    /** Draws the category as a second badge. */
    showCategory?: boolean;
}
export declare function EngagementHighlight({ trend, rank, action, showCategory }: EngagementHighlightProps): import("react").JSX.Element;
