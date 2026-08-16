import type { ReactNode } from "react";
export interface SessionEditorProps {
    /** Name of the session field. */
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
export declare function SessionEditor({ label, value, maxLength, footer, onValueChange }: SessionEditorProps): import("react").JSX.Element;
