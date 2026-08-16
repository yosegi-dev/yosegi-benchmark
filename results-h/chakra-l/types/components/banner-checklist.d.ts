export interface BannerChecklistProps {
    /** The banner options, in display order. */
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
export declare function BannerChecklist({ items, checkedIds, onItemToggle, size }: BannerChecklistProps): import("react").JSX.Element;
