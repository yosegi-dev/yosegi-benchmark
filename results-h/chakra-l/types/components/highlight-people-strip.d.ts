import type { AuthorModel } from "~/models";
export interface HighlightPeopleStripProps {
    /** The accounts involved in this highlight, in display order. */
    people: AuthorModel[];
    /** How many avatars to show before collapsing the rest. */
    max?: number;
    /** Rendered after the avatars. */
    caption?: string;
    /** Controls the avatar size. */
    size?: "xs" | "sm" | "md";
}
export declare function HighlightPeopleStrip({ people, max, caption, size }: HighlightPeopleStripProps): import("react").JSX.Element;
