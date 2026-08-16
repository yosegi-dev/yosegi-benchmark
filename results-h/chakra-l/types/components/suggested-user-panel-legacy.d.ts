import type { AuthorModel } from "~/models";
export interface SuggestedUserPanelLegacyProps {
    /** Panel title. */
    title: string;
    /** The accounts to suggest; the panel renders the rows and follow buttons itself. */
    users: AuthorModel[];
    /** Controls the panel padding. */
    size?: "sm" | "md";
    /** Fired with the id of the account whose follow button was activated. */
    onFollow?: (id: string) => void;
}
export declare function SuggestedUserPanelLegacy({ title, users, size, onFollow, }: SuggestedUserPanelLegacyProps): import("react").JSX.Element;
