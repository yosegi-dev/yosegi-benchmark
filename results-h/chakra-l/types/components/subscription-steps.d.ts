import type { ReactNode } from "react";
export interface SubscriptionStepsProps {
    /** The subscription steps, in order. */
    steps: {
        id: string;
        title: string;
        description?: string;
    }[];
    /** Zero-based position of the step being worked on. */
    current: number;
    /** Rendered under the step list. */
    content?: ReactNode;
    /** Controls the indicator size. */
    size?: "sm" | "md" | "lg";
}
export declare function SubscriptionSteps({ steps, current, content, size }: SubscriptionStepsProps): import("react").JSX.Element;
