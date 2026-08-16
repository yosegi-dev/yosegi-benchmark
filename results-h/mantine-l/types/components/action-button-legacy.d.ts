export interface ActionButtonLegacyProps {
    /** Which action this is. */
    kind: "comment" | "share" | "favorite";
    /** Visible text. */
    text: string;
    /** Shown after the text when set. */
    total?: number;
    /** Renders the engaged state. */
    selected?: boolean;
    onClick: () => void;
}
export declare function ActionButtonLegacy({ kind, text, total, selected, onClick, }: ActionButtonLegacyProps): import("react").JSX.Element;
