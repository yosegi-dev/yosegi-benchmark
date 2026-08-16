import type { ReactNode } from "react";
export interface BoostStepsProps {
    /** The boost steps, in order. */
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
export declare function BoostSteps({ steps, current, content, size }: BoostStepsProps): import("react").JSX.Element;
