export interface NotificationMenuItem {
    id: string;
    label: string;
    /** Renders the item in red and moves it under a rule. */
    destructive?: boolean;
    disabled?: boolean;
}
export interface NotificationMenuProps {
    items: NotificationMenuItem[];
    onSelect: (id: string) => void;
    /** Which edge the menu is anchored to. */
    align?: "left" | "right";
}
export declare function NotificationMenu({ items, onSelect, align }: NotificationMenuProps): import("react").JSX.Element;
