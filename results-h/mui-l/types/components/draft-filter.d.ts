export interface DraftFilterOption {
    value: string;
    label: string;
}
export interface DraftFilterProps {
    /** Label drawn before the control. */
    label: string;
    /** The selected option value. */
    value: string;
    /** Options to choose from. */
    options: DraftFilterOption[];
    /** Fired with the option value that was picked. */
    onValueChange: (value: string) => void;
    /** MUI control scale. */
    size?: "small" | "medium";
}
export declare function DraftFilter({ label, value, options, onValueChange, size }: DraftFilterProps): import("react").JSX.Element;
