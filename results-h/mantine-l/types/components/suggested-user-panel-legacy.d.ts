export interface SuggestedUserPanelLegacyProps {
    /** Panel title. */
    title: string;
    /** Accounts to suggest. */
    users: {
        name: string;
        handle: string;
        avatar: string;
    }[];
    /** Fired with the handle of the account whose follow button was clicked. */
    onFollow: (handle: string) => void;
}
export declare function SuggestedUserPanelLegacy({ title, users, onFollow, }: SuggestedUserPanelLegacyProps): import("react").JSX.Element;
