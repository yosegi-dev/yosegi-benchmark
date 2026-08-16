import type { ReactNode } from "react";
import type { AuthorModel } from "~/models";
export interface SuggestedUserRowProps {
    author: AuthorModel;
    /** Slot for the author's avatar. */
    avatar: ReactNode;
    /** Slot for the follow control. */
    follow: ReactNode;
    /** Why this account is being suggested, e.g. "Followed by Rin". */
    reason?: string;
}
export declare function SuggestedUserRow({ author, avatar, follow, reason }: SuggestedUserRowProps): import("react").JSX.Element;
