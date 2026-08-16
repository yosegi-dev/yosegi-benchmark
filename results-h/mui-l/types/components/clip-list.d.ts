import type { ReactNode } from "react";
export interface ClipListProps {
    /** The rows, already rendered by the caller. */
    children: ReactNode;
    /** Title above the rows; omit for an unlabelled list. */
    title?: string;
    /** Draws a rule between rows. */
    divided?: boolean;
    /** Vertical padding of the block. */
    padding?: "none" | "sm" | "md";
    /** Drawn to the right of the title. */
    action?: ReactNode;
}
export declare function ClipList({ children, title, divided, padding, action }: ClipListProps): import("react").JSX.Element;
