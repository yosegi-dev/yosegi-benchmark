export interface KeywordFilterOption {
    value: string;
    label: string;
}
export interface KeywordFilterProps {
    label: string;
    options: KeywordFilterOption[];
    /** Value of the selected option, or an empty string for none. */
    value: string;
    onValueChange: (value: string) => void;
    /** Shows the clear button once a value is picked. */
    clearable?: boolean;
}
export declare function KeywordFilter({ label, options, value, onValueChange, clearable }: KeywordFilterProps): import("react").JSX.Element;
