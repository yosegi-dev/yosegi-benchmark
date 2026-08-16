export interface DigestTagRowProps {
    /** The digest tags to show, in display order. */
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
export declare function DigestTagRow({ tags, removable, onTagRemove, size }: DigestTagRowProps): import("react").JSX.Element;
