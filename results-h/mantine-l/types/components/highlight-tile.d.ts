export interface HighlightTileProps {
    title: string;
    /** Small line under the title. */
    caption?: string;
    /** Drawn behind the text when set. */
    imageUrl?: string;
    /** Draws the selected outline. */
    selected?: boolean;
    onActivate?: () => void;
}
export declare function HighlightTile({ title, caption, imageUrl, selected, onActivate }: HighlightTileProps): import("react").JSX.Element;
