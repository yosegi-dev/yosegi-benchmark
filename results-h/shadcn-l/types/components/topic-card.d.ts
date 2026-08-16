import type { ReactNode } from "react";
import type { AuthorModel } from "~/models";
export interface TopicCardProps {
    title: string;
    /** One-line description under the title. */
    subtitle?: string;
    /** Whoever created the topic; drives the byline. */
    owner: AuthorModel;
    /** Members, followers, or items, depending on the topic. */
    memberCount: number;
    /** Rendered in the top-right corner. */
    badge?: ReactNode;
    joined?: boolean;
    onJoinToggle?: (joined: boolean) => void;
}
export declare function TopicCard({ title, subtitle, owner, memberCount, badge, joined, onJoinToggle, }: TopicCardProps): import("react").JSX.Element;
