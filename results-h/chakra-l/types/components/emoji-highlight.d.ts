import type { ReactNode } from "react";
import type { TrendModel } from "~/models";
export interface EmojiHighlightProps {
    /** The trend this emoji highlight is built from. */
    trend: TrendModel;
    /** Position in the surrounding list; drawn as a leading badge. */
    rank?: number;
    /** Rendered at the end of the row. */
    action?: ReactNode;
    /** Draws the category as a second badge. */
    showCategory?: boolean;
}
export declare function EmojiHighlight({ trend, rank, action, showCategory }: EmojiHighlightProps): import("react").JSX.Element;
