export interface ReplayPlaceholderProps {
    /** How many replay rows to fake. */
    rows?: number;
    /** Reserves a circle where the avatar would go. */
    showAvatar?: boolean;
    /** Reserves a block where an attachment would go. */
    showMedia?: boolean;
}
export declare function ReplayPlaceholder({ rows, showAvatar, showMedia }: ReplayPlaceholderProps): import("react").JSX.Element;
