export interface EngagementTileProps {
    label: string;
    /** Already formatted for display, e.g. "12.4K". */
    value: string;
    /** Percentage change against the previous period. */
    delta?: number;
    trend?: "up" | "down" | "flat";
}
export declare function EngagementTile({ label, value, delta, trend }: EngagementTileProps): import("react").JSX.Element;
