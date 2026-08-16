import type { ReactNode } from "react";
export interface ActionButtonGroupProps {
    /** The buttons to group, in order. */
    children: ReactNode;
    /** Controls the gap when the buttons are not attached. */
    size?: "sm" | "md" | "lg";
    /** Removes the gap and merges the adjacent corners. */
    attached?: boolean;
}
export declare function ActionButtonGroup({ children, size, attached }: ActionButtonGroupProps): import("react").JSX.Element;
