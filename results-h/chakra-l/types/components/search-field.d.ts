import type { Density } from "~/models";
export interface SearchFieldProps {
    /** The current query text; the field is fully controlled. */
    value: string;
    placeholder?: string;
    /** Controls the input height. */
    density?: Density;
    /** Fired with the next query text on every keystroke. */
    onQueryChange: (value: string) => void;
}
export declare function SearchField({ value, placeholder, density, onQueryChange, }: SearchFieldProps): import("react").JSX.Element;
