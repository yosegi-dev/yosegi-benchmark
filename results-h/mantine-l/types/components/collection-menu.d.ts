import type { ReactNode } from "react";
export interface CollectionMenuOption {
    id: string;
    label: string;
    /** Renders the option in the destructive colour. */
    danger?: boolean;
}
export interface CollectionMenuProps {
    options: CollectionMenuOption[];
    /** Slot for the element that opens the menu. */
    trigger: ReactNode;
    /** Fired with the id of the option that was chosen. */
    onSelectOption: (id: string) => void;
    position?: "bottom-end" | "bottom-start";
}
export declare function CollectionMenu({ options, trigger, onSelectOption, position }: CollectionMenuProps): import("react").JSX.Element;
