import type { ReactNode } from "react";
export interface FontStepsProps {
    /** The font steps, in order. */
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
export declare function FontSteps({ steps, current, content, size }: FontStepsProps): import("react").JSX.Element;
