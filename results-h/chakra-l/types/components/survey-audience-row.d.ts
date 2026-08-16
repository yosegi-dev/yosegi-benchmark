import type { ReactNode } from "react";
import type { AuthorModel, Visibility } from "~/models";
export interface SurveyAudienceRowProps {
    /** The account this survey row is about. */
    author: AuthorModel;
    /** Who can see this account's activity here. */
    visibility: Visibility;
    /** Rendered at the end of the row. */
    meta?: ReactNode;
    /** Fired with the account's id when the row is activated. */
    onSelect?: (id: string) => void;
}
export declare function SurveyAudienceRow({ author, visibility, meta, onSelect }: SurveyAudienceRowProps): import("react").JSX.Element;
