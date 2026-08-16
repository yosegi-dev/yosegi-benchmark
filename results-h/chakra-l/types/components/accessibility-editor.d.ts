import type { ReactNode } from "react";
export interface AccessibilityEditorProps {
    /** Name of the accessibility field. */
    label: string;
    /** Current text; the textarea is fully controlled. */
    value: string;
    /** Caps the input and drives the counter. */
    maxLength?: number;
    /** Rendered in the footer, opposite the counter. */
    footer?: ReactNode;
    /** Fired with the next text on every keystroke. */
    onValueChange: (value: string) => void;
}
export declare function AccessibilityEditor({ label, value, maxLength, footer, onValueChange }: AccessibilityEditorProps): import("react").JSX.Element;
