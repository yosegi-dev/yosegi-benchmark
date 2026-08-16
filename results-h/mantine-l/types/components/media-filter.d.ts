export interface MediaFilterOption {
    value: string;
    label: string;
}
export interface MediaFilterProps {
    label: string;
    options: MediaFilterOption[];
    /** Value of the selected option, or an empty string for none. */
    value: string;
    onValueChange: (value: string) => void;
    /** Shows the clear button once a value is picked. */
    clearable?: boolean;
}
export declare function MediaFilter({ label, options, value, onValueChange, clearable }: MediaFilterProps): import("react").JSX.Element;
