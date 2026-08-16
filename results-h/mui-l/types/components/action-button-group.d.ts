import type { ReactNode } from "react";
export interface ActionButtonGroupProps {
    /** The buttons to group. */
    children: ReactNode;
    /** MUI button scale applied to every child. */
    size?: "small" | "medium" | "large";
    /** Joins the buttons into one segmented control instead of spacing them. */
    attached?: boolean;
    /** Lays the buttons out top to bottom. */
    vertical?: boolean;
    /** Stretches the group to the width of its container. */
    fullWidth?: boolean;
}
export declare function ActionButtonGroup({ children, size, attached, vertical, fullWidth, }: ActionButtonGroupProps): import("react").JSX.Element;
