export interface EventTileProps {
    title: string;
    /** Small line under the title. */
    caption?: string;
    /** Drawn behind the text when set. */
    imageUrl?: string;
    /** Draws the selected outline. */
    selected?: boolean;
    onActivate?: () => void;
}
export declare function EventTile({ title, caption, imageUrl, selected, onActivate }: EventTileProps): import("react").JSX.Element;
