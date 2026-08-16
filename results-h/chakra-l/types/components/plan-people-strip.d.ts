import type { AuthorModel } from "~/models";
export interface PlanPeopleStripProps {
    /** The accounts involved in this plan, in display order. */
    people: AuthorModel[];
    /** How many avatars to show before collapsing the rest. */
    max?: number;
    /** Rendered after the avatars. */
    caption?: string;
    /** Controls the avatar size. */
    size?: "xs" | "sm" | "md";
}
export declare function PlanPeopleStrip({ people, max, caption, size }: PlanPeopleStripProps): import("react").JSX.Element;
