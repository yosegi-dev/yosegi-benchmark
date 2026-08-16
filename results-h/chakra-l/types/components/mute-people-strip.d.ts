import type { AuthorModel } from "~/models";
export interface MutePeopleStripProps {
    /** The accounts involved in this mute, in display order. */
    people: AuthorModel[];
    /** How many avatars to show before collapsing the rest. */
    max?: number;
    /** Rendered after the avatars. */
    caption?: string;
    /** Controls the avatar size. */
    size?: "xs" | "sm" | "md";
}
export declare function MutePeopleStrip({ people, max, caption, size }: MutePeopleStripProps): import("react").JSX.Element;
