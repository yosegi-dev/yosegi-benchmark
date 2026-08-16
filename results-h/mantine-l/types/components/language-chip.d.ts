export interface LanguageChipProps {
    label: string;
    /** Whether the chip is on. */
    selected?: boolean;
    /** Fired with the state the chip is moving to. */
    onToggle?: (selected: boolean) => void;
    size?: "xs" | "sm" | "md";
    color?: string;
}
export declare function LanguageChip({ label, selected, onToggle, size, color }: LanguageChipProps): import("react").JSX.Element;
