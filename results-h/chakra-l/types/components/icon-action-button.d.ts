import type { ReactNode } from "react";
export interface IconActionButtonProps {
    /** The glyph to render; sized by the button, not by itself. */
    icon: ReactNode;
    /** Accessible name; the button shows no visible text. */
    label: string;
    /** Chakra button variant, passed through unchanged. */
    variant?: "solid" | "ghost" | "outline";
    /** Controls the button height. */
    size?: "xs" | "sm" | "md";
    /** Fired when the button is activated. */
    onClick: () => void;
}
export declare function IconActionButton({ icon, label, variant, size, onClick, }: IconActionButtonProps): import("react").JSX.Element;
