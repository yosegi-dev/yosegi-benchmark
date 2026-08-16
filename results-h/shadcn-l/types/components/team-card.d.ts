import type { ReactNode } from "react";
import type { AuthorModel } from "~/models";
export interface TeamCardProps {
    title: string;
    /** One-line description under the title. */
    subtitle?: string;
    /** Whoever created the team; drives the byline. */
    owner: AuthorModel;
    /** Members, followers, or items, depending on the team. */
    memberCount: number;
    /** Rendered in the top-right corner. */
    badge?: ReactNode;
    joined?: boolean;
    onJoinToggle?: (joined: boolean) => void;
}
export declare function TeamCard({ title, subtitle, owner, memberCount, badge, joined, onJoinToggle, }: TeamCardProps): import("react").JSX.Element;
