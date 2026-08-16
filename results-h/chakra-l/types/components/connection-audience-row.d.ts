import type { ReactNode } from "react";
import type { AuthorModel, Visibility } from "~/models";
export interface ConnectionAudienceRowProps {
    /** The account this connection row is about. */
    author: AuthorModel;
    /** Who can see this account's activity here. */
    visibility: Visibility;
    /** Rendered at the end of the row. */
    meta?: ReactNode;
    /** Fired with the account's id when the row is activated. */
    onSelect?: (id: string) => void;
}
export declare function ConnectionAudienceRow({ author, visibility, meta, onSelect }: ConnectionAudienceRowProps): import("react").JSX.Element;
