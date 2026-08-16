export interface PollTileProps {
    title: string;
    /** Small line under the title. */
    caption?: string;
    /** Drawn behind the text when set. */
    imageUrl?: string;
    /** Draws the selected outline. */
    selected?: boolean;
    onActivate?: () => void;
}
export declare function PollTile({ title, caption, imageUrl, selected, onActivate }: PollTileProps): import("react").JSX.Element;
