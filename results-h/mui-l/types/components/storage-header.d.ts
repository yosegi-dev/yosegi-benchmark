import type { ReactNode } from "react";
export interface StorageHeaderProps {
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
export declare function StorageHeader({ title, badge, description, align, actions }: StorageHeaderProps): import("react").JSX.Element;
