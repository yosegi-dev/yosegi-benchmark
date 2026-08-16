export interface FollowerTileProps {
    label: string;
    /** Already formatted for display, e.g. "12.4K". */
    value: string;
    /** Percentage change against the previous period. */
    delta?: number;
    trend?: "up" | "down" | "flat";
}
export declare function FollowerTile({ label, value, delta, trend }: FollowerTileProps): import("react").JSX.Element;
