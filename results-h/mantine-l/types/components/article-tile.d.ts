export interface ArticleTileProps {
    title: string;
    /** Small line under the title. */
    caption?: string;
    /** Drawn behind the text when set. */
    imageUrl?: string;
    /** Draws the selected outline. */
    selected?: boolean;
    onActivate?: () => void;
}
export declare function ArticleTile({ title, caption, imageUrl, selected, onActivate }: ArticleTileProps): import("react").JSX.Element;
