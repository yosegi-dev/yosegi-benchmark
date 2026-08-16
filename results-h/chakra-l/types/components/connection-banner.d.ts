import type { ReactNode } from "react";
export interface ConnectionBannerProps {
    /** Headline of the connection notice. */
    title: string;
    /** Supporting sentence under the headline. */
    description?: string;
    /** Picks the icon and the colour of the banner. */
    status?: "info" | "warning" | "success" | "error";
    /** Rendered at the end of the banner — a link, a button, anything trailing. */
    action?: ReactNode;
    /** When set, a dismiss button is shown. */
    onDismiss?: () => void;
}
export declare function ConnectionBanner({ title, description, status, action, onDismiss }: ConnectionBannerProps): import("react").JSX.Element;
