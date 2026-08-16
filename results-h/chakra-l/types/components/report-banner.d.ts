import type { ReactNode } from "react";
export interface ReportBannerProps {
    /** Headline of the report notice. */
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
export declare function ReportBanner({ title, description, status, action, onDismiss }: ReportBannerProps): import("react").JSX.Element;
