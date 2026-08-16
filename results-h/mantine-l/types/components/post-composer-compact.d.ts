export interface PostComposerCompactProps {
    /** Current text. */
    value: string;
    onChange: (value: string) => void;
    onSubmit: () => void;
    placeholder?: string;
    size?: "sm" | "md";
}
export declare function PostComposerCompact({ value, onChange, onSubmit, placeholder, size, }: PostComposerCompactProps): import("react").JSX.Element;
