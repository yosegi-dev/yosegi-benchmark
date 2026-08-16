export interface SearchFieldCompactProps {
    /** Current query text. */
    value: string;
    onChange: (value: string) => void;
    size?: "xs" | "sm";
    disabled?: boolean;
}
export declare function SearchFieldCompact({ value, onChange, size, disabled, }: SearchFieldCompactProps): import("react").JSX.Element;
