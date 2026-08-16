import type { ReactNode } from "react";
export interface ChangelogStepsProps {
    /** The changelog steps, in order. */
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
export declare function ChangelogSteps({ steps, current, content, size }: ChangelogStepsProps): import("react").JSX.Element;
