export interface MediaMenuItem {
    id: string;
    label: string;
    /** Renders the item in red and moves it under a rule. */
    destructive?: boolean;
    disabled?: boolean;
}
export interface MediaMenuProps {
    items: MediaMenuItem[];
    onSelect: (id: string) => void;
    /** Which edge the menu is anchored to. */
    align?: "left" | "right";
}
export declare function MediaMenu({ items, onSelect, align }: MediaMenuProps): import("react").JSX.Element;
