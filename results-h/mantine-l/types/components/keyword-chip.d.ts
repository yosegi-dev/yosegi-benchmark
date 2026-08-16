export interface KeywordChipProps {
    label: string;
    /** Whether the chip is on. */
    selected?: boolean;
    /** Fired with the state the chip is moving to. */
    onToggle?: (selected: boolean) => void;
    size?: "xs" | "sm" | "md";
    color?: string;
}
export declare function KeywordChip({ label, selected, onToggle, size, color }: KeywordChipProps): import("react").JSX.Element;
