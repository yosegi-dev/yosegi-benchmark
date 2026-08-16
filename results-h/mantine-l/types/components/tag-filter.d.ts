export interface TagFilterOption {
    value: string;
    label: string;
}
export interface TagFilterProps {
    label: string;
    options: TagFilterOption[];
    /** Value of the selected option, or an empty string for none. */
    value: string;
    onValueChange: (value: string) => void;
    /** Shows the clear button once a value is picked. */
    clearable?: boolean;
}
export declare function TagFilter({ label, options, value, onValueChange, clearable }: TagFilterProps): import("react").JSX.Element;
