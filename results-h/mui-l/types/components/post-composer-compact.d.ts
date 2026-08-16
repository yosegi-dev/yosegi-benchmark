export interface PostComposerCompactProps {
    /** Avatar image for the signed-in user. */
    avatarUrl: string;
    /** Current text; the field is controlled. */
    value: string;
    onChange: (value: string) => void;
    onSubmit: () => void;
    placeholder?: string;
    /** Text on the submit button. */
    buttonLabel?: string;
    /** Overall scale of the row. */
    size?: "sm" | "md";
}
export declare function PostComposerCompact({ avatarUrl, value, onChange, onSubmit, placeholder, buttonLabel, size, }: PostComposerCompactProps): import("react").JSX.Element;
