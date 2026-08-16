export interface AttachmentChoiceGroupProps {
    /** Name of the attachment choice. */
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
export declare function AttachmentChoiceGroup({ label, value, options, onSelect }: AttachmentChoiceGroupProps): import("react").JSX.Element;
