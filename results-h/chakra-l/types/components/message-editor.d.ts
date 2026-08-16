import type { ReactNode } from "react";
export interface MessageEditorProps {
    /** Name of the message field. */
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
export declare function MessageEditor({ label, value, maxLength, footer, onValueChange }: MessageEditorProps): import("react").JSX.Element;
