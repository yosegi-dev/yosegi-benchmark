import type { ReactNode } from "react";
export interface IconActionButtonProps {
    /** The glyph to draw; the caller supplies it. */
    icon: ReactNode;
    /** Accessible name, also used as the tooltip. */
    label: string;
    /** Drawn as a badge on the icon when set. */
    count?: number;
    /** True when the action is already applied. */
    selected?: boolean;
    /** MUI icon-button scale. */
    size?: "small" | "medium" | "large";
    disabled?: boolean;
    onClick: () => void;
}
export declare function IconActionButton({ icon, label, count, selected, size, disabled, onClick, }: IconActionButtonProps): import("react").JSX.Element;
