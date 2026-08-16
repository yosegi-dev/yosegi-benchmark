export interface LocationToggleProps {
    /** What the switch controls. */
    label: string;
    /** Sentence under the label. */
    description?: string;
    enabled: boolean;
    /** Fired with the state the switch is moving to. */
    onEnabledChange: (enabled: boolean) => void;
    disabled?: boolean;
}
export declare function LocationToggle({ label, description, enabled, onEnabledChange, disabled, }: LocationToggleProps): import("react").JSX.Element;
