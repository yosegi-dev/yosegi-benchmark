import type { ReactNode } from "react";
export interface PostMenuOption {
    id: string;
    label: string;
    /** Renders the option in the destructive colour. */
    danger?: boolean;
}
export interface PostMenuProps {
    options: PostMenuOption[];
    /** Slot for the element that opens the menu. */
    trigger: ReactNode;
    /** Fired with the id of the option that was chosen. */
    onSelectOption: (id: string) => void;
    position?: "bottom-end" | "bottom-start";
}
export declare function PostMenu({ options, trigger, onSelectOption, position }: PostMenuProps): import("react").JSX.Element;
