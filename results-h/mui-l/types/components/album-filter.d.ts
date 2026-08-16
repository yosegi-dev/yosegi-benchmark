export interface AlbumFilterOption {
    value: string;
    label: string;
}
export interface AlbumFilterProps {
    /** Label drawn before the control. */
    label: string;
    /** The selected option value. */
    value: string;
    /** Options to choose from. */
    options: AlbumFilterOption[];
    /** Fired with the option value that was picked. */
    onValueChange: (value: string) => void;
    /** MUI control scale. */
    size?: "small" | "medium";
}
export declare function AlbumFilter({ label, value, options, onValueChange, size }: AlbumFilterProps): import("react").JSX.Element;
