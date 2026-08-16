export interface PostTileProps {
    label: string;
    /** Already formatted for display, e.g. "12.4K". */
    value: string;
    /** Percentage change against the previous period. */
    delta?: number;
    trend?: "up" | "down" | "flat";
}
export declare function PostTile({ label, value, delta, trend }: PostTileProps): import("react").JSX.Element;
