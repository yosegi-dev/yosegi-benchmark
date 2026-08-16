export interface ActionButtonLegacyProps {
    /** Action name as the v1 feed API spelled it. */
    kind: "comment" | "retweet" | "favorite";
    /** Count shown after the icon. */
    total: number;
    /** True when the signed-in user has already performed the action. */
    highlighted?: boolean;
    /** MUI button scale. */
    size?: "small" | "medium";
    onClick: () => void;
}
export declare function ActionButtonLegacy({ kind, total, highlighted, size, onClick, }: ActionButtonLegacyProps): import("react").JSX.Element;
