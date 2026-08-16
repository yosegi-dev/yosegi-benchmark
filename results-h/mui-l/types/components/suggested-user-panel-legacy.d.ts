import type { AuthorModel } from "~/models";
export interface SuggestedUserPanelLegacyProps {
    /** Panel title. */
    title: string;
    /** Accounts to suggest; the panel renders the rows itself. */
    users: AuthorModel[];
    /** Ids the signed-in user already follows. */
    followedIds?: string[];
    /** Tightens the row padding. */
    compact?: boolean;
    /** Fired with the id of the account whose follow button was clicked. */
    onFollowClick?: (userId: string) => void;
}
export declare function SuggestedUserPanelLegacy({ title, users, followedIds, compact, onFollowClick, }: SuggestedUserPanelLegacyProps): import("react").JSX.Element;
