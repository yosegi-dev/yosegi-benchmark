export interface ReachTileProps {
    label: string;
    /** Already formatted for display, e.g. "12.4K". */
    value: string;
    /** Percentage change against the previous period. */
    delta?: number;
    trend?: "up" | "down" | "flat";
}
export declare function ReachTile({ label, value, delta, trend }: ReachTileProps): import("react").JSX.Element;
