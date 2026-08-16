export interface AuthorFilterOption {
    value: string;
    label: string;
}
export interface AuthorFilterProps {
    label: string;
    options: AuthorFilterOption[];
    /** Value of the selected option, or an empty string for none. */
    value: string;
    onValueChange: (value: string) => void;
    /** Shows the clear button once a value is picked. */
    clearable?: boolean;
}
export declare function AuthorFilter({ label, options, value, onValueChange, clearable }: AuthorFilterProps): import("react").JSX.Element;
