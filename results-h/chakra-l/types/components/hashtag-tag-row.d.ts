export interface HashtagTagRowProps {
    /** The hashtag tags to show, in display order. */
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
export declare function HashtagTagRow({ tags, removable, onTagRemove, size }: HashtagTagRowProps): import("react").JSX.Element;
