import type { ReactNode } from "react";
import type { AuthorModel } from "~/models";
export interface BlockProfileProps {
    /** The account this block block describes. */
    author: AuthorModel;
    /** The account's own description. */
    bio?: string;
    /** Absolute URL of the header image drawn above the avatar. */
    bannerUrl?: string;
    /** Rendered under the bio — follower counts, joined date, and the like. */
    stats?: ReactNode;
}
export declare function BlockProfile({ author, bio, bannerUrl, stats }: BlockProfileProps): import("react").JSX.Element;
