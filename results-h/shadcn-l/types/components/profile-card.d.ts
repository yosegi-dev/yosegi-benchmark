import type { ReactNode } from "react";
import type { AuthorModel } from "~/models";
export interface ProfileCardProps {
    title: string;
    /** One-line description under the title. */
    subtitle?: string;
    /** Whoever created the profile; drives the byline. */
    owner: AuthorModel;
    /** Members, followers, or items, depending on the profile. */
    memberCount: number;
    /** Rendered in the top-right corner. */
    badge?: ReactNode;
    joined?: boolean;
    onJoinToggle?: (joined: boolean) => void;
}
export declare function ProfileCard({ title, subtitle, owner, memberCount, badge, joined, onJoinToggle, }: ProfileCardProps): import("react").JSX.Element;
