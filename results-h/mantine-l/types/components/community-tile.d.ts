export interface CommunityTileProps {
    title: string;
    /** Small line under the title. */
    caption?: string;
    /** Drawn behind the text when set. */
    imageUrl?: string;
    /** Draws the selected outline. */
    selected?: boolean;
    onActivate?: () => void;
}
export declare function CommunityTile({ title, caption, imageUrl, selected, onActivate }: CommunityTileProps): import("react").JSX.Element;
