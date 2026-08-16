export interface FilterMenuItem {
    id: string;
    label: string;
    /** Renders the item in red and moves it under a rule. */
    destructive?: boolean;
    disabled?: boolean;
}
export interface FilterMenuProps {
    items: FilterMenuItem[];
    onSelect: (id: string) => void;
    /** Which edge the menu is anchored to. */
    align?: "left" | "right";
}
export declare function FilterMenu({ items, onSelect, align }: FilterMenuProps): import("react").JSX.Element;
