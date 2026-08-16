export interface ReferralTileProps {
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
export declare function ReferralTile({ label, value, delta, trend, onClick }: ReferralTileProps): import("react").JSX.Element;
