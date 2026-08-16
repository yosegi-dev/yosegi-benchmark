import type { ReactNode } from "react";
import type { AuthorModel } from "~/models";
export interface InviteCardProps {
    title: string;
    /** One-line description under the title. */
    subtitle?: string;
    /** Whoever created the invite; drives the byline. */
    owner: AuthorModel;
    /** Members, followers, or items, depending on the invite. */
    memberCount: number;
    /** Rendered in the top-right corner. */
    badge?: ReactNode;
    joined?: boolean;
    onJoinToggle?: (joined: boolean) => void;
}
export declare function InviteCard({ title, subtitle, owner, memberCount, badge, joined, onJoinToggle, }: InviteCardProps): import("react").JSX.Element;
