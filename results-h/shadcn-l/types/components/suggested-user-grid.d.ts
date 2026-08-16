import type { AuthorModel } from "~/models";
export interface SuggestedUserGridProps {
    users: AuthorModel[];
    columns?: 2 | 3 | 4;
    size?: "sm" | "md" | "lg";
    onUserClick?: (user: AuthorModel) => void;
}
export declare function SuggestedUserGrid({ users, columns, size, onUserClick, }: SuggestedUserGridProps): import("react").JSX.Element;
