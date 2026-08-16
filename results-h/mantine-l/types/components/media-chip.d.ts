export interface MediaChipProps {
    label: string;
    /** Whether the chip is on. */
    selected?: boolean;
    /** Fired with the state the chip is moving to. */
    onToggle?: (selected: boolean) => void;
    size?: "xs" | "sm" | "md";
    color?: string;
}
export declare function MediaChip({ label, selected, onToggle, size, color }: MediaChipProps): import("react").JSX.Element;
