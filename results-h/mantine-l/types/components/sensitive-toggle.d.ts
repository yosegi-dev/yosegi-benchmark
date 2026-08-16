export interface SensitiveToggleProps {
    /** What the switch controls. */
    label: string;
    /** Sentence under the label. */
    description?: string;
    enabled: boolean;
    /** Fired with the state the switch is moving to. */
    onEnabledChange: (enabled: boolean) => void;
    disabled?: boolean;
}
export declare function SensitiveToggle({ label, description, enabled, onEnabledChange, disabled, }: SensitiveToggleProps): import("react").JSX.Element;
