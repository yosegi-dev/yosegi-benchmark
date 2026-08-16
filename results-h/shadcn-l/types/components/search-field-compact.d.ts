export interface SearchFieldCompactProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    size?: "sm" | "md" | "lg";
    autoFocus?: boolean;
}
export declare function SearchFieldCompact({ value, onChange, placeholder, size, autoFocus, }: SearchFieldCompactProps): import("react").JSX.Element;
