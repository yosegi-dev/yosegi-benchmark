export interface LabelPlaceholderProps {
    /** How many label rows to fake. */
    rows?: number;
    /** Reserves a circle where the avatar would go. */
    showAvatar?: boolean;
    /** Reserves a block where an attachment would go. */
    showMedia?: boolean;
}
export declare function LabelPlaceholder({ rows, showAvatar, showMedia }: LabelPlaceholderProps): import("react").JSX.Element;
