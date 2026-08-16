import type { ReactNode } from "react";
import type { AuthorModel } from "~/models";
export interface RecommendationCardProps {
    title: string;
    /** One-line description under the title. */
    subtitle?: string;
    /** Whoever created the recommendation; drives the byline. */
    owner: AuthorModel;
    /** Members, followers, or items, depending on the recommendation. */
    memberCount: number;
    /** Rendered in the top-right corner. */
    badge?: ReactNode;
    joined?: boolean;
    onJoinToggle?: (joined: boolean) => void;
}
export declare function RecommendationCard({ title, subtitle, owner, memberCount, badge, joined, onJoinToggle, }: RecommendationCardProps): import("react").JSX.Element;
