import { type ReactNode } from "react";
export interface SearchBarProps {
    /** Starting query. The bar keeps its own state from there. */
    defaultValue?: string;
    /** Fired on submit, not on every keystroke. */
    onSearch: (query: string) => void;
    placeholder?: string;
    /** Controls drawn after the input, e.g. a filter menu. */
    children?: ReactNode;
    /** Removes the border so the bar can sit on a colored surface. */
    flush?: boolean;
}
export declare function SearchBar({ defaultValue, onSearch, placeholder, children, flush, }: SearchBarProps): import("react").JSX.Element;
