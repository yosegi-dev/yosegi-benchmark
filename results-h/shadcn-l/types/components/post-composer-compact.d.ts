import type { ReactNode } from "react";
export interface PostComposerCompactProps {
    value: string;
    onChange: (value: string) => void;
    onSubmit: () => void;
    placeholder?: string;
    size?: "sm" | "md" | "lg";
    /** Rendered between the input and the submit button. */
    children?: ReactNode;
}
export declare function PostComposerCompact({ value, onChange, onSubmit, placeholder, size, children, }: PostComposerCompactProps): import("react").JSX.Element;
