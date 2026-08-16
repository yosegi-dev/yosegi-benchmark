import type { ReactNode } from "react";
export interface ReachEditorProps {
    /** Name of the reach field. */
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
export declare function ReachEditor({ label, value, maxLength, footer, onValueChange }: ReachEditorProps): import("react").JSX.Element;
