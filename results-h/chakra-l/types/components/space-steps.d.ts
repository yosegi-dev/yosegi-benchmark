import type { ReactNode } from "react";
export interface SpaceStepsProps {
    /** The space steps, in order. */
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
export declare function SpaceSteps({ steps, current, content, size }: SpaceStepsProps): import("react").JSX.Element;
