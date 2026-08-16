import type { ReactNode } from "react";
import type { TrendModel } from "~/models";
export interface ShortcutHighlightProps {
    /** The trend this shortcut highlight is built from. */
    trend: TrendModel;
    /** Position in the surrounding list; drawn as a leading badge. */
    rank?: number;
    /** Rendered at the end of the row. */
    action?: ReactNode;
    /** Draws the category as a second badge. */
    showCategory?: boolean;
}
export declare function ShortcutHighlight({ trend, rank, action, showCategory }: ShortcutHighlightProps): import("react").JSX.Element;
