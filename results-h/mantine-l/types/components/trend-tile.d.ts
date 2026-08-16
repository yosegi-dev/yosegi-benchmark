export interface TrendTileProps {
    title: string;
    /** Small line under the title. */
    caption?: string;
    /** Drawn behind the text when set. */
    imageUrl?: string;
    /** Draws the selected outline. */
    selected?: boolean;
    onActivate?: () => void;
}
export declare function TrendTile({ title, caption, imageUrl, selected, onActivate }: TrendTileProps): import("react").JSX.Element;
