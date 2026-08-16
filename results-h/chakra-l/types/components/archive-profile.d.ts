import type { ReactNode } from "react";
import type { AuthorModel } from "~/models";
export interface ArchiveProfileProps {
    /** The account this archive block describes. */
    author: AuthorModel;
    /** The account's own description. */
    bio?: string;
    /** Absolute URL of the header image drawn above the avatar. */
    bannerUrl?: string;
    /** Rendered under the bio — follower counts, joined date, and the like. */
    stats?: ReactNode;
}
export declare function ArchiveProfile({ author, bio, bannerUrl, stats }: ArchiveProfileProps): import("react").JSX.Element;
