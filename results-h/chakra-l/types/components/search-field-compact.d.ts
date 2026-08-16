export interface SearchFieldCompactProps {
    /** The current query text; the field is fully controlled. */
    query: string;
    /** Controls the input height. */
    size?: "xs" | "sm" | "md";
    /** Rendered under the field in muted text. */
    hint?: string;
    /** Fired with the next query text on every keystroke. */
    onChange: (query: string) => void;
}
export declare function SearchFieldCompact({ query, size, hint, onChange }: SearchFieldCompactProps): import("react").JSX.Element;
