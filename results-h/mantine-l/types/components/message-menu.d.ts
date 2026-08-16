import type { ReactNode } from "react";
export interface MessageMenuOption {
    id: string;
    label: string;
    /** Renders the option in the destructive colour. */
    danger?: boolean;
}
export interface MessageMenuProps {
    options: MessageMenuOption[];
    /** Slot for the element that opens the menu. */
    trigger: ReactNode;
    /** Fired with the id of the option that was chosen. */
    onSelectOption: (id: string) => void;
    position?: "bottom-end" | "bottom-start";
}
export declare function MessageMenu({ options, trigger, onSelectOption, position }: MessageMenuProps): import("react").JSX.Element;
