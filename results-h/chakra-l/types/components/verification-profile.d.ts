import type { ReactNode } from "react";
import type { AuthorModel } from "~/models";
export interface VerificationProfileProps {
    /** The account this verification block describes. */
    author: AuthorModel;
    /** The account's own description. */
    bio?: string;
    /** Absolute URL of the header image drawn above the avatar. */
    bannerUrl?: string;
    /** Rendered under the bio — follower counts, joined date, and the like. */
    stats?: ReactNode;
}
export declare function VerificationProfile({ author, bio, bannerUrl, stats }: VerificationProfileProps): import("react").JSX.Element;
