export interface PersonChipProps {
    label: string;
    /** Whether the chip is on. */
    selected?: boolean;
    /** Fired with the state the chip is moving to. */
    onToggle?: (selected: boolean) => void;
    size?: "xs" | "sm" | "md";
    color?: string;
}
export declare function PersonChip({ label, selected, onToggle, size, color }: PersonChipProps): import("react").JSX.Element;
