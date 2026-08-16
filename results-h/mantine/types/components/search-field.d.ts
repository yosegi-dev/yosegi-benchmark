import type { Density } from "~/models";
export interface SearchFieldProps {
    /** Current query text. */
    value: string;
    placeholder?: string;
    /** Control size. */
    density?: Density;
    /** Fired on every keystroke with the next query text. */
    onQueryChange: (value: string) => void;
}
export declare function SearchField({ value, placeholder, density, onQueryChange, }: SearchFieldProps): import("react").JSX.Element;
