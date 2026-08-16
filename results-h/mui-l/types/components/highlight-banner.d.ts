export interface HighlightBannerProps {
    /** Headline. */
    title: string;
    /** Copy under the headline. */
    body: string;
    /** Label of the primary button; the button is hidden without it. */
    actionLabel?: string;
    /** Placement of the banner in the page flow. */
    placement?: "inline" | "top" | "bottom";
    onAction?: () => void;
    onClose?: () => void;
}
export declare function HighlightBanner({ title, body, actionLabel, placement, onAction, onClose }: HighlightBannerProps): import("react").JSX.Element;
