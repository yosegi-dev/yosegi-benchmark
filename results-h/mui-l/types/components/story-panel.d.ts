import type { ReactNode } from "react";
export interface StoryPanelProps {
    /** Panel title. */
    heading: string;
    /** Panel contents. */
    children: ReactNode;
    /** Drawn to the right of the heading. */
    actions?: ReactNode;
    /** Drawn under the contents, behind a divider. */
    footer?: ReactNode;
    /** Tightens the padding. */
    dense?: boolean;
}
export declare function StoryPanel({ heading, children, actions, footer, dense }: StoryPanelProps): import("react").JSX.Element;
