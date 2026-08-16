import type { AuthorModel } from "~/models";
export interface AppealRowProps {
    /** The account the row is about. */
    author: AuthorModel;
    /** Line under the display name. */
    summary: string;
    /** Pre-formatted timestamp shown at the trailing edge. */
    timestamp?: string;
    /** Small label drawn after the display name. */
    tag?: string;
    /** Tightens the vertical padding. */
    dense?: boolean;
}
export declare function AppealRow({ author, summary, timestamp, tag, dense }: AppealRowProps): import("react").JSX.Element;
