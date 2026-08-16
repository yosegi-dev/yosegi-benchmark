import type { AuthorModel } from "~/models";
export interface MediaPeopleStripProps {
    /** The accounts involved in this media, in display order. */
    people: AuthorModel[];
    /** How many avatars to show before collapsing the rest. */
    max?: number;
    /** Rendered after the avatars. */
    caption?: string;
    /** Controls the avatar size. */
    size?: "xs" | "sm" | "md";
}
export declare function MediaPeopleStrip({ people, max, caption, size }: MediaPeopleStripProps): import("react").JSX.Element;
