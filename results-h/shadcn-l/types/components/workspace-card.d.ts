import type { ReactNode } from "react";
import type { AuthorModel } from "~/models";
export interface WorkspaceCardProps {
    title: string;
    /** One-line description under the title. */
    subtitle?: string;
    /** Whoever created the workspace; drives the byline. */
    owner: AuthorModel;
    /** Members, followers, or items, depending on the workspace. */
    memberCount: number;
    /** Rendered in the top-right corner. */
    badge?: ReactNode;
    joined?: boolean;
    onJoinToggle?: (joined: boolean) => void;
}
export declare function WorkspaceCard({ title, subtitle, owner, memberCount, badge, joined, onJoinToggle, }: WorkspaceCardProps): import("react").JSX.Element;
