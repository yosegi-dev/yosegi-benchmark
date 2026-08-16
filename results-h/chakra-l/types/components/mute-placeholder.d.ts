export interface MutePlaceholderProps {
    /** How many mute rows to fake. */
    rows?: number;
    /** Reserves a circle where the avatar would go. */
    showAvatar?: boolean;
    /** Reserves a block where an attachment would go. */
    showMedia?: boolean;
}
export declare function MutePlaceholder({ rows, showAvatar, showMedia }: MutePlaceholderProps): import("react").JSX.Element;
