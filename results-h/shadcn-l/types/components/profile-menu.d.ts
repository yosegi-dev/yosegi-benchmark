export interface ProfileMenuItem {
    id: string;
    label: string;
    /** Renders the item in red and moves it under a rule. */
    destructive?: boolean;
    disabled?: boolean;
}
export interface ProfileMenuProps {
    items: ProfileMenuItem[];
    onSelect: (id: string) => void;
    /** Which edge the menu is anchored to. */
    align?: "left" | "right";
}
export declare function ProfileMenu({ items, onSelect, align }: ProfileMenuProps): import("react").JSX.Element;
