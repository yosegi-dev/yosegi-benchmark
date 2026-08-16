export interface AutoplayToggleProps {
    /** What the switch controls. */
    label: string;
    /** Sentence under the label. */
    description?: string;
    enabled: boolean;
    /** Fired with the state the switch is moving to. */
    onEnabledChange: (enabled: boolean) => void;
    disabled?: boolean;
}
export declare function AutoplayToggle({ label, description, enabled, onEnabledChange, disabled, }: AutoplayToggleProps): import("react").JSX.Element;
