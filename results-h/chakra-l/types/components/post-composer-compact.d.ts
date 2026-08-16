export interface PostComposerCompactProps {
    /** The draft text; the field is fully controlled. */
    value: string;
    /** Absolute URL of the signed-in user's avatar. */
    avatarUrl: string;
    /** Shown in the empty field. */
    placeholder?: string;
    /** Controls the field height. */
    size?: "sm" | "md" | "lg";
    /** Fired with the next draft text on every keystroke. */
    onChange: (value: string) => void;
    /** Fired when the submit button is activated. */
    onSubmit: () => void;
}
export declare function PostComposerCompact({ value, avatarUrl, placeholder, size, onChange, onSubmit, }: PostComposerCompactProps): import("react").JSX.Element;
