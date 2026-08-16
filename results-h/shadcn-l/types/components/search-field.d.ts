import type { Density } from "~/models";
export interface SearchFieldProps {
    /** The current query text. The field is fully controlled. */
    value: string;
    placeholder?: string;
    /** Spacing scale, which here selects the control height. */
    density?: Density;
    /** Called with the next query text on every keystroke. */
    onQueryChange: (value: string) => void;
}
export declare function SearchField({ value, placeholder, density, onQueryChange, }: SearchFieldProps): import("react").JSX.Element;
