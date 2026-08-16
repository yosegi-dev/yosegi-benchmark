import type { ReactNode } from "react";
export interface SearchBarProps {
    /** Initial query text; the bar keeps its own state from there. */
    defaultValue?: string;
    /** Shown in the empty field. */
    placeholder?: string;
    /** Fired with the query when the form is submitted, not on every keystroke. */
    onSearch: (value: string) => void;
    /** Rendered after the submit button — filters, scope pickers, and the like. */
    children?: ReactNode;
}
export declare function SearchBar({ defaultValue, placeholder, onSearch, children, }: SearchBarProps): import("react").JSX.Element;
