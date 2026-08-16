export interface SortMenuItem {
    id: string;
    label: string;
    /** Renders the item in red and moves it under a rule. */
    destructive?: boolean;
    disabled?: boolean;
}
export interface SortMenuProps {
    items: SortMenuItem[];
    onSelect: (id: string) => void;
    /** Which edge the menu is anchored to. */
    align?: "left" | "right";
}
export declare function SortMenu({ items, onSelect, align }: SortMenuProps): import("react").JSX.Element;
