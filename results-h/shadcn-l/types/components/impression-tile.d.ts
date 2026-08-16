export interface ImpressionTileProps {
    label: string;
    /** Already formatted for display, e.g. "12.4K". */
    value: string;
    /** Percentage change against the previous period. */
    delta?: number;
    trend?: "up" | "down" | "flat";
}
export declare function ImpressionTile({ label, value, delta, trend }: ImpressionTileProps): import("react").JSX.Element;
