export interface PaymentFilterOption {
    value: string;
    label: string;
}
export interface PaymentFilterProps {
    /** Label drawn before the control. */
    label: string;
    /** The selected option value. */
    value: string;
    /** Options to choose from. */
    options: PaymentFilterOption[];
    /** Fired with the option value that was picked. */
    onValueChange: (value: string) => void;
    /** MUI control scale. */
    size?: "small" | "medium";
}
export declare function PaymentFilter({ label, value, options, onValueChange, size }: PaymentFilterProps): import("react").JSX.Element;
