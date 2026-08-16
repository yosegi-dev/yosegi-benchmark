import type { ReactNode } from "react";
export interface SearchBarProps {
    /** Current query text. */
    query: string;
    /** Fired on every keystroke with the next query. */
    onQuery: (query: string) => void;
    /** Fired when Enter is pressed. */
    onSubmit?: () => void;
    /** Completions shown under the field. */
    suggestions?: string[];
    /** Controls placed to the right of the field. */
    children?: ReactNode;
}
export declare function SearchBar({ query, onQuery, onSubmit, suggestions, children }: SearchBarProps): import("react").JSX.Element;
