export interface TopicTileProps {
    title: string;
    /** Small line under the title. */
    caption?: string;
    /** Drawn behind the text when set. */
    imageUrl?: string;
    /** Draws the selected outline. */
    selected?: boolean;
    onActivate?: () => void;
}
export declare function TopicTile({ title, caption, imageUrl, selected, onActivate }: TopicTileProps): import("react").JSX.Element;
