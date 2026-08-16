export interface PhotoTileProps {
    title: string;
    /** Small line under the title. */
    caption?: string;
    /** Drawn behind the text when set. */
    imageUrl?: string;
    /** Draws the selected outline. */
    selected?: boolean;
    onActivate?: () => void;
}
export declare function PhotoTile({ title, caption, imageUrl, selected, onActivate }: PhotoTileProps): import("react").JSX.Element;
