export interface NotificationFilterOption {
    value: string;
    label: string;
}
export interface NotificationFilterProps {
    /** Label drawn before the control. */
    label: string;
    /** The selected option value. */
    value: string;
    /** Options to choose from. */
    options: NotificationFilterOption[];
    /** Fired with the option value that was picked. */
    onValueChange: (value: string) => void;
    /** MUI control scale. */
    size?: "small" | "medium";
}
export declare function NotificationFilter({ label, value, options, onValueChange, size }: NotificationFilterProps): import("react").JSX.Element;
