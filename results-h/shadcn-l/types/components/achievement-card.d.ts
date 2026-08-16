import type { ReactNode } from "react";
import type { AuthorModel } from "~/models";
export interface AchievementCardProps {
    title: string;
    /** One-line description under the title. */
    subtitle?: string;
    /** Whoever created the achievement; drives the byline. */
    owner: AuthorModel;
    /** Members, followers, or items, depending on the achievement. */
    memberCount: number;
    /** Rendered in the top-right corner. */
    badge?: ReactNode;
    joined?: boolean;
    onJoinToggle?: (joined: boolean) => void;
}
export declare function AchievementCard({ title, subtitle, owner, memberCount, badge, joined, onJoinToggle, }: AchievementCardProps): import("react").JSX.Element;
