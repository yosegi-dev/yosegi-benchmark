export interface ActionButtonLegacyProps {
    /** Which action this is; kept from the pre-rename vocabulary. */
    kind: "comment" | "share" | "favorite";
    /** Visible button text. */
    text: string;
    /** Optional counter drawn after the text. */
    badge?: number;
    /** Renders the button in its engaged state. */
    selected?: boolean;
    /** Controls the button height. */
    size?: "xs" | "sm" | "md";
    /** Fired when the button is activated. */
    onClick: () => void;
}
export declare function ActionButtonLegacy({ kind, text, badge, selected, size, onClick, }: ActionButtonLegacyProps): import("react").JSX.Element;
