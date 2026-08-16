import type { ReactNode } from "react";
export interface SearchBarProps {
    /** The submitted query, not the in-progress input value. */
    query: string;
    /** Called when the user submits, not on every keystroke. */
    onSearch: (query: string) => void;
    /** Rendered as a dropdown under the field. */
    suggestions?: string[];
    loading?: boolean;
    /** Rendered to the right of the submit button, e.g. a filter control. */
    children?: ReactNode;
}
export declare function SearchBar({ query, onSearch, suggestions, loading, children, }: SearchBarProps): import("react").JSX.Element;
