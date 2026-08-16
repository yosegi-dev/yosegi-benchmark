export interface LoginChoiceGroupProps {
    /** Name of the login choice. */
    label: string;
    /** Value of the option currently selected. */
    value: string;
    /** The options to offer, in display order. */
    options: {
        value: string;
        label: string;
    }[];
    /** Fired with the value of the option that was picked. */
    onSelect: (value: string) => void;
}
export declare function LoginChoiceGroup({ label, value, options, onSelect }: LoginChoiceGroupProps): import("react").JSX.Element;
