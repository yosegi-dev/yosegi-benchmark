export interface CreatorChecklistProps {
    /** The creator options, in display order. */
    items: {
        id: string;
        label: string;
    }[];
    /** Ids of the options currently ticked. */
    checkedIds: string[];
    /** Fired with the id of the option that was toggled. */
    onItemToggle: (id: string) => void;
    /** Controls the control size. */
    size?: "sm" | "md" | "lg";
}
export declare function CreatorChecklist({ items, checkedIds, onItemToggle, size }: CreatorChecklistProps): import("react").JSX.Element;
