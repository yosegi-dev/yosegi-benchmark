export interface AchievementChoiceGroupProps {
    /** Name of the achievement choice. */
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
export declare function AchievementChoiceGroup({ label, value, options, onSelect }: AchievementChoiceGroupProps): import("react").JSX.Element;
