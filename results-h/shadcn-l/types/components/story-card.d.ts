import type { ReactNode } from "react";
import type { AuthorModel } from "~/models";
export interface StoryCardProps {
    title: string;
    /** One-line description under the title. */
    subtitle?: string;
    /** Whoever created the story; drives the byline. */
    owner: AuthorModel;
    /** Members, followers, or items, depending on the story. */
    memberCount: number;
    /** Rendered in the top-right corner. */
    badge?: ReactNode;
    joined?: boolean;
    onJoinToggle?: (joined: boolean) => void;
}
export declare function StoryCard({ title, subtitle, owner, memberCount, badge, joined, onJoinToggle, }: StoryCardProps): import("react").JSX.Element;
