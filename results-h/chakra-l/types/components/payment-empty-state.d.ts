import type { ReactNode } from "react";
export interface PaymentEmptyStateProps {
    /** Headline shown when there is no payment to display. */
    title: string;
    /** One line telling the reader what to do about it. */
    description?: string;
    /** Rendered under the description — usually a call to action. */
    action?: ReactNode;
    /** Controls the spacing and the icon size. */
    size?: "sm" | "md" | "lg";
}
export declare function PaymentEmptyState({ title, description, action, size }: PaymentEmptyStateProps): import("react").JSX.Element;
