export interface SupportPlaceholderProps {
    /** How many support rows to fake. */
    rows?: number;
    /** Reserves a circle where the avatar would go. */
    showAvatar?: boolean;
    /** Reserves a block where an attachment would go. */
    showMedia?: boolean;
}
export declare function SupportPlaceholder({ rows, showAvatar, showMedia }: SupportPlaceholderProps): import("react").JSX.Element;
