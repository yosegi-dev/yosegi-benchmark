export interface VerificationBannerProps {
    /** The sentence shown to the user. */
    message: string;
    /** Drives the colour of the banner. */
    severity: "info" | "success" | "warning" | "error";
    /** Bold line above the message. */
    title?: string;
    /** Shows the close button. */
    dismissible?: boolean;
    onDismiss?: () => void;
}
export declare function VerificationBanner({ message, severity, title, dismissible, onDismiss }: VerificationBannerProps): import("react").JSX.Element;
