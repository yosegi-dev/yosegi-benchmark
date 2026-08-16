import type { ReactNode } from "react";
export interface ActionButtonGroupProps {
    /** The buttons to lay out. */
    children: ReactNode;
    align?: "start" | "center" | "end";
    size?: "sm" | "md" | "lg";
}
export declare function ActionButtonGroup({ children, align, size, }: ActionButtonGroupProps): import("react").JSX.Element;
