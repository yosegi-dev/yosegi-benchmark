export interface PostMenuItem {
    id: string;
    label: string;
    /** Renders the item in red and moves it under a rule. */
    destructive?: boolean;
    disabled?: boolean;
}
export interface PostMenuProps {
    items: PostMenuItem[];
    onSelect: (id: string) => void;
    /** Which edge the menu is anchored to. */
    align?: "left" | "right";
}
export declare function PostMenu({ items, onSelect, align }: PostMenuProps): import("react").JSX.Element;
