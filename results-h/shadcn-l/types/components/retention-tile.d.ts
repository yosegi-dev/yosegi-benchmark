export interface RetentionTileProps {
    label: string;
    /** Already formatted for display, e.g. "12.4K". */
    value: string;
    /** Percentage change against the previous period. */
    delta?: number;
    trend?: "up" | "down" | "flat";
}
export declare function RetentionTile({ label, value, delta, trend }: RetentionTileProps): import("react").JSX.Element;
