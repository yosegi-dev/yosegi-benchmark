export interface PinPlaceholderProps {
    /** How many pin rows to fake. */
    rows?: number;
    /** Reserves a circle where the avatar would go. */
    showAvatar?: boolean;
    /** Reserves a block where an attachment would go. */
    showMedia?: boolean;
}
export declare function PinPlaceholder({ rows, showAvatar, showMedia }: PinPlaceholderProps): import("react").JSX.Element;
