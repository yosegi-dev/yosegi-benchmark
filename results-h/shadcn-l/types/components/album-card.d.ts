import type { ReactNode } from "react";
import type { AuthorModel } from "~/models";
export interface AlbumCardProps {
    title: string;
    /** One-line description under the title. */
    subtitle?: string;
    /** Whoever created the album; drives the byline. */
    owner: AuthorModel;
    /** Members, followers, or items, depending on the album. */
    memberCount: number;
    /** Rendered in the top-right corner. */
    badge?: ReactNode;
    joined?: boolean;
    onJoinToggle?: (joined: boolean) => void;
}
export declare function AlbumCard({ title, subtitle, owner, memberCount, badge, joined, onJoinToggle, }: AlbumCardProps): import("react").JSX.Element;
