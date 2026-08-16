import type { ReactNode } from "react";
export interface ModerationMenuOption {
    id: string;
    label: string;
    /** Renders the option in the destructive colour. */
    danger?: boolean;
}
export interface ModerationMenuProps {
    options: ModerationMenuOption[];
    /** Slot for the element that opens the menu. */
    trigger: ReactNode;
    /** Fired with the id of the option that was chosen. */
    onSelectOption: (id: string) => void;
    position?: "bottom-end" | "bottom-start";
}
export declare function ModerationMenu({ options, trigger, onSelectOption, position }: ModerationMenuProps): import("react").JSX.Element;
