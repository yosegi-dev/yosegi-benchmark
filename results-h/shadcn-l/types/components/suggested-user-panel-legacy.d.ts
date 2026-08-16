import type { ReactNode } from "react";
import type { AuthorModel } from "~/models";
export interface SuggestedUserPanelLegacyProps {
    title: string;
    /** The panel renders its own rows from this list. */
    users: AuthorModel[];
    onFollowClick?: (user: AuthorModel) => void;
    /** Appended below the rows, typically a "show more" link. */
    children?: ReactNode;
}
export declare function SuggestedUserPanelLegacy({ title, users, onFollowClick, children, }: SuggestedUserPanelLegacyProps): import("react").JSX.Element;
