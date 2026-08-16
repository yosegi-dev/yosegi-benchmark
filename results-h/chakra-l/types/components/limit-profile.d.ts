import type { ReactNode } from "react";
import type { AuthorModel } from "~/models";
export interface LimitProfileProps {
    /** The account this limit block describes. */
    author: AuthorModel;
    /** The account's own description. */
    bio?: string;
    /** Absolute URL of the header image drawn above the avatar. */
    bannerUrl?: string;
    /** Rendered under the bio — follower counts, joined date, and the like. */
    stats?: ReactNode;
}
export declare function LimitProfile({ author, bio, bannerUrl, stats }: LimitProfileProps): import("react").JSX.Element;
