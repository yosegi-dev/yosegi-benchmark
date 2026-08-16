import type { ReactNode } from "react";
export interface AccountMenuOption {
    id: string;
    label: string;
    /** Renders the option in the destructive colour. */
    danger?: boolean;
}
export interface AccountMenuProps {
    options: AccountMenuOption[];
    /** Slot for the element that opens the menu. */
    trigger: ReactNode;
    /** Fired with the id of the option that was chosen. */
    onSelectOption: (id: string) => void;
    position?: "bottom-end" | "bottom-start";
}
export declare function AccountMenu({ options, trigger, onSelectOption, position }: AccountMenuProps): import("react").JSX.Element;
