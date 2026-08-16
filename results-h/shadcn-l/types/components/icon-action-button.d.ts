import type { ReactNode } from "react";
export interface IconActionButtonProps {
    /** The glyph to render; sized by the caller. */
    icon: ReactNode;
    /** Accessible name, since the button shows no text. */
    label: string;
    variant?: "primary" | "secondary" | "ghost";
    /** Draws the pressed state. */
    selected?: boolean;
    onClick: () => void;
}
export declare function IconActionButton({ icon, label, variant, selected, onClick, }: IconActionButtonProps): import("react").JSX.Element;
