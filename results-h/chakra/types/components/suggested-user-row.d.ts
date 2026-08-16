import type { ReactNode } from "react";
import type { AuthorModel } from "~/models";
export interface SuggestedUserRowProps {
    /** The account being suggested. */
    author: AuthorModel;
    /** Slot for the account's avatar. */
    avatar: ReactNode;
    /** Slot for the follow button. */
    follow: ReactNode;
    /** Why the account is being suggested, e.g. "Followed by rin". */
    reason?: string;
}
export declare function SuggestedUserRow({ author, avatar, follow, reason }: SuggestedUserRowProps): import("react").JSX.Element;
