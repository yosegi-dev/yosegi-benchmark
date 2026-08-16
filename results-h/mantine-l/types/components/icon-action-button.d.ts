import type { ReactNode } from "react";
export interface IconActionButtonProps {
    /** The glyph to render inside the button. */
    icon: ReactNode;
    /** Accessible name, also used as the tooltip text. */
    ariaLabel: string;
    /** Key of the Mantine palette. */
    color?: string;
    size?: "sm" | "md" | "lg";
    onClick: () => void;
    disabled?: boolean;
}
export declare function IconActionButton({ icon, ariaLabel, color, size, onClick, disabled, }: IconActionButtonProps): import("react").JSX.Element;
