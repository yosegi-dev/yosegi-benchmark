import type { ReactNode } from "react";
export interface ArchiveHeaderProps {
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
export declare function ArchiveHeader({ title, badge, description, align, actions }: ArchiveHeaderProps): import("react").JSX.Element;
