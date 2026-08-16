import type { ReactNode } from "react";
export interface ProfileMenuOption {
    id: string;
    label: string;
    /** Renders the option in the destructive colour. */
    danger?: boolean;
}
export interface ProfileMenuProps {
    options: ProfileMenuOption[];
    /** Slot for the element that opens the menu. */
    trigger: ReactNode;
    /** Fired with the id of the option that was chosen. */
    onSelectOption: (id: string) => void;
    position?: "bottom-end" | "bottom-start";
}
export declare function ProfileMenu({ options, trigger, onSelectOption, position }: ProfileMenuProps): import("react").JSX.Element;
