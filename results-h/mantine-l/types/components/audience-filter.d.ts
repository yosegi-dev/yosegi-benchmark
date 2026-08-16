export interface AudienceFilterOption {
    value: string;
    label: string;
}
export interface AudienceFilterProps {
    label: string;
    options: AudienceFilterOption[];
    /** Value of the selected option, or an empty string for none. */
    value: string;
    onValueChange: (value: string) => void;
    /** Shows the clear button once a value is picked. */
    clearable?: boolean;
}
export declare function AudienceFilter({ label, options, value, onValueChange, clearable }: AudienceFilterProps): import("react").JSX.Element;
