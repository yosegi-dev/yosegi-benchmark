export interface LanguageFilterOption {
    value: string;
    label: string;
}
export interface LanguageFilterProps {
    label: string;
    options: LanguageFilterOption[];
    /** Value of the selected option, or an empty string for none. */
    value: string;
    onValueChange: (value: string) => void;
    /** Shows the clear button once a value is picked. */
    clearable?: boolean;
}
export declare function LanguageFilter({ label, options, value, onValueChange, clearable }: LanguageFilterProps): import("react").JSX.Element;
