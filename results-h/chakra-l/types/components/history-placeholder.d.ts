export interface HistoryPlaceholderProps {
    /** How many history rows to fake. */
    rows?: number;
    /** Reserves a circle where the avatar would go. */
    showAvatar?: boolean;
    /** Reserves a block where an attachment would go. */
    showMedia?: boolean;
}
export declare function HistoryPlaceholder({ rows, showAvatar, showMedia }: HistoryPlaceholderProps): import("react").JSX.Element;
