import type { ReactNode } from "react";
export interface MediaMenuOption {
    id: string;
    label: string;
    /** Renders the option in the destructive colour. */
    danger?: boolean;
}
export interface MediaMenuProps {
    options: MediaMenuOption[];
    /** Slot for the element that opens the menu. */
    trigger: ReactNode;
    /** Fired with the id of the option that was chosen. */
    onSelectOption: (id: string) => void;
    position?: "bottom-end" | "bottom-start";
}
export declare function MediaMenu({ options, trigger, onSelectOption, position }: MediaMenuProps): import("react").JSX.Element;
