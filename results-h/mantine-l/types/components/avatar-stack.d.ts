export interface AvatarStackProps {
    /** Image URLs, drawn front to back. */
    sources: string[];
    /** Maximum number of images drawn. */
    max?: number;
    /** Negative offset in px applied between images. */
    spacing?: number;
}
export declare function AvatarStack({ sources, max, spacing }: AvatarStackProps): import("react").JSX.Element;
