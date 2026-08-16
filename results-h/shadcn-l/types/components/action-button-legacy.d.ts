export interface ActionButtonLegacyProps {
    /** Which action this is. Predates the tone vocabulary. */
    kind: "comment" | "share" | "favorite" | "more";
    /** Optional caption next to the icon. */
    text?: string;
    /** Rendered as a pill after the caption. */
    badgeCount?: number;
    disabled?: boolean;
    onClick: () => void;
}
export declare function ActionButtonLegacy({ kind, text, badgeCount, disabled, onClick, }: ActionButtonLegacyProps): import("react").JSX.Element;
