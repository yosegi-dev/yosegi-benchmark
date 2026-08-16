export interface ProfileTileProps {
    label: string;
    /** Already formatted for display, e.g. "12.4K". */
    value: string;
    /** Percentage change against the previous period. */
    delta?: number;
    trend?: "up" | "down" | "flat";
}
export declare function ProfileTile({ label, value, delta, trend }: ProfileTileProps): import("react").JSX.Element;
