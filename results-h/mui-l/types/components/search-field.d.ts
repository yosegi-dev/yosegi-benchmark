import type { Density } from "~/models";
export interface SearchFieldProps {
    /** Current query text; the field is controlled. */
    value: string;
    placeholder?: string;
    /** Drives the input height. */
    density?: Density;
    /** Fired with the next query on every keystroke. */
    onQueryChange: (value: string) => void;
}
export declare function SearchField({ value, placeholder, density, onQueryChange, }: SearchFieldProps): import("react").JSX.Element;
