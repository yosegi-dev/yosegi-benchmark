import type { ChangeEvent } from "react";
export interface SearchFieldCompactProps {
    /** Current query text. */
    query: string;
    /** Fired with the raw DOM event, not the value. */
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    /** Placeholder text. */
    hint?: string;
    /** Overall scale of the input. */
    size?: "sm" | "md";
    /** Draws the field in a filled variant for use on a toolbar. */
    filled?: boolean;
    autoFocus?: boolean;
}
export declare function SearchFieldCompact({ query, onChange, hint, size, filled, autoFocus, }: SearchFieldCompactProps): import("react").JSX.Element;
