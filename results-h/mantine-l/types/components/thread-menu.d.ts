import type { ReactNode } from "react";
export interface ThreadMenuOption {
    id: string;
    label: string;
    /** Renders the option in the destructive colour. */
    danger?: boolean;
}
export interface ThreadMenuProps {
    options: ThreadMenuOption[];
    /** Slot for the element that opens the menu. */
    trigger: ReactNode;
    /** Fired with the id of the option that was chosen. */
    onSelectOption: (id: string) => void;
    position?: "bottom-end" | "bottom-start";
}
export declare function ThreadMenu({ options, trigger, onSelectOption, position }: ThreadMenuProps): import("react").JSX.Element;
