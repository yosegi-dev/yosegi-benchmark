import type { AuthorModel } from "~/models";
export interface LabelPeopleStripProps {
    /** The accounts involved in this label, in display order. */
    people: AuthorModel[];
    /** How many avatars to show before collapsing the rest. */
    max?: number;
    /** Rendered after the avatars. */
    caption?: string;
    /** Controls the avatar size. */
    size?: "xs" | "sm" | "md";
}
export declare function LabelPeopleStrip({ people, max, caption, size }: LabelPeopleStripProps): import("react").JSX.Element;
