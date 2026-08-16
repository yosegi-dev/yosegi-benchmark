export interface ThreadMenuItem {
    id: string;
    label: string;
    /** Renders the item in red and moves it under a rule. */
    destructive?: boolean;
    disabled?: boolean;
}
export interface ThreadMenuProps {
    items: ThreadMenuItem[];
    onSelect: (id: string) => void;
    /** Which edge the menu is anchored to. */
    align?: "left" | "right";
}
export declare function ThreadMenu({ items, onSelect, align }: ThreadMenuProps): import("react").JSX.Element;
