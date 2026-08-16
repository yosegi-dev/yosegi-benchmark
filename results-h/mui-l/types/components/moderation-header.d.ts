import type { ReactNode } from "react";
export interface ModerationHeaderProps {
    /** Headline of the surface. */
    title: string;
    /** Small label drawn after the title. */
    badge?: string;
    /** Copy under the title. */
    description?: ReactNode;
    /** Text alignment of the block. */
    align?: "start" | "center";
    /** Controls drawn at the trailing edge. */
    actions?: ReactNode;
}
export declare function ModerationHeader({ title, badge, description, align, actions }: ModerationHeaderProps): import("react").JSX.Element;
