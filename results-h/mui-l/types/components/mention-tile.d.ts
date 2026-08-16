import type { ReactNode } from "react";
export interface MentionTileProps {
    /** Caption under the value. */
    label: string;
    /** The value, already formatted. */
    value: string;
    /** Glyph drawn at the leading edge. */
    icon?: ReactNode;
    /** Surface treatment of the tile. */
    variant?: "plain" | "filled" | "outlined";
    /** Stretches the tile to fill its grid cell. */
    fullHeight?: boolean;
}
export declare function MentionTile({ label, value, icon, variant, fullHeight }: MentionTileProps): import("react").JSX.Element;
