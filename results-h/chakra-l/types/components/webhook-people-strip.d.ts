import type { AuthorModel } from "~/models";
export interface WebhookPeopleStripProps {
    /** The accounts involved in this webhook, in display order. */
    people: AuthorModel[];
    /** How many avatars to show before collapsing the rest. */
    max?: number;
    /** Rendered after the avatars. */
    caption?: string;
    /** Controls the avatar size. */
    size?: "xs" | "sm" | "md";
}
export declare function WebhookPeopleStrip({ people, max, caption, size }: WebhookPeopleStripProps): import("react").JSX.Element;
