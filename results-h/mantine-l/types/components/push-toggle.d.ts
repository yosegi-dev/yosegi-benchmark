export interface PushToggleProps {
    /** What the switch controls. */
    label: string;
    /** Sentence under the label. */
    description?: string;
    enabled: boolean;
    /** Fired with the state the switch is moving to. */
    onEnabledChange: (enabled: boolean) => void;
    disabled?: boolean;
}
export declare function PushToggle({ label, description, enabled, onEnabledChange, disabled, }: PushToggleProps): import("react").JSX.Element;
