export interface RankingTileProps {
    /** What the number counts. */
    label: string;
    /** The number, already formatted. */
    value: string;
    /** Change against the previous period, in percent. */
    delta?: number;
    /** Direction the change is drawn in. */
    trend?: "up" | "down" | "flat";
    onClick?: () => void;
}
export declare function RankingTile({ label, value, delta, trend, onClick }: RankingTileProps): import("react").JSX.Element;
