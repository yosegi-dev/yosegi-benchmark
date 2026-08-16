export interface AlbumTagRowProps {
    /** The album tags to show, in display order. */
    tags: {
        id: string;
        label: string;
    }[];
    /** Adds a close trigger to every tag. */
    removable?: boolean;
    /** Fired with the id of the tag that was removed. */
    onTagRemove?: (id: string) => void;
    /** Controls the tag height. */
    size?: "sm" | "md" | "lg";
}
export declare function AlbumTagRow({ tags, removable, onTagRemove, size }: AlbumTagRowProps): import("react").JSX.Element;
