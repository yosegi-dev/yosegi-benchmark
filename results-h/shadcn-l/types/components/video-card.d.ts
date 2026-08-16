import type { ReactNode } from "react";
import type { AuthorModel } from "~/models";
export interface VideoCardProps {
    title: string;
    /** One-line description under the title. */
    subtitle?: string;
    /** Whoever created the video; drives the byline. */
    owner: AuthorModel;
    /** Members, followers, or items, depending on the video. */
    memberCount: number;
    /** Rendered in the top-right corner. */
    badge?: ReactNode;
    joined?: boolean;
    onJoinToggle?: (joined: boolean) => void;
}
export declare function VideoCard({ title, subtitle, owner, memberCount, badge, joined, onJoinToggle, }: VideoCardProps): import("react").JSX.Element;
