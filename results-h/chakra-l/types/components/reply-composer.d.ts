import type { ReactNode } from "react";
export interface ReplyComposerProps {
    /** Handle of the account being replied to, without the leading "@". */
    replyingTo: string;
    /** The reply text; the textarea is fully controlled. */
    value: string;
    /** Fired with the next reply text on every keystroke. */
    onChange: (value: string) => void;
    /** Fired when the reply button is activated. */
    onSubmit: () => void;
    /** Rendered in the footer, before the reply button. */
    children?: ReactNode;
}
export declare function ReplyComposer({ replyingTo, value, onChange, onSubmit, children }: ReplyComposerProps): import("react").JSX.Element;
