import type { ReactNode } from "react";
import type { AuthorModel } from "~/models";
export interface PollCardProps {
    title: string;
    /** One-line description under the title. */
    subtitle?: string;
    /** Whoever created the poll; drives the byline. */
    owner: AuthorModel;
    /** Members, followers, or items, depending on the poll. */
    memberCount: number;
    /** Rendered in the top-right corner. */
    badge?: ReactNode;
    joined?: boolean;
    onJoinToggle?: (joined: boolean) => void;
}
export declare function PollCard({ title, subtitle, owner, memberCount, badge, joined, onJoinToggle, }: PollCardProps): import("react").JSX.Element;
