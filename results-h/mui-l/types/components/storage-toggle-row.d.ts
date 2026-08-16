export interface StorageToggleRowProps {
    /** Name of the setting. */
    label: string;
    /** Explanation under the label. */
    description?: string;
    /** Current state. */
    checked: boolean;
    /** Fired with the state the switch is moving to. */
    onCheckedChange: (checked: boolean) => void;
    /** Greys the row out and blocks the switch. */
    disabled?: boolean;
}
export declare function StorageToggleRow({ label, description, checked, onCheckedChange, disabled }: StorageToggleRowProps): import("react").JSX.Element;
