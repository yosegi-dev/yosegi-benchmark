export interface RecoveryTileProps {
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
export declare function RecoveryTile({ label, value, delta, trend, onClick }: RecoveryTileProps): import("react").JSX.Element;
