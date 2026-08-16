export interface SpaceTileProps {
    title: string;
    /** Small line under the title. */
    caption?: string;
    /** Drawn behind the text when set. */
    imageUrl?: string;
    /** Draws the selected outline. */
    selected?: boolean;
    onActivate?: () => void;
}
export declare function SpaceTile({ title, caption, imageUrl, selected, onActivate }: SpaceTileProps): import("react").JSX.Element;
