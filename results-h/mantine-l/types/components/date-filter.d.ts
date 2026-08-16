export interface DateFilterOption {
    value: string;
    label: string;
}
export interface DateFilterProps {
    label: string;
    options: DateFilterOption[];
    /** Value of the selected option, or an empty string for none. */
    value: string;
    onValueChange: (value: string) => void;
    /** Shows the clear button once a value is picked. */
    clearable?: boolean;
}
export declare function DateFilter({ label, options, value, onValueChange, clearable }: DateFilterProps): import("react").JSX.Element;
