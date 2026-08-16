export interface AccountMenuItem {
    id: string;
    label: string;
    /** Renders the item in red and moves it under a rule. */
    destructive?: boolean;
    disabled?: boolean;
}
export interface AccountMenuProps {
    items: AccountMenuItem[];
    onSelect: (id: string) => void;
    /** Which edge the menu is anchored to. */
    align?: "left" | "right";
}
export declare function AccountMenu({ items, onSelect, align }: AccountMenuProps): import("react").JSX.Element;
