import type { ReactNode } from "react";
import type { AuthorModel } from "~/models";
export interface ReplyComposerProps {
    /** The account being replied to, named above the field. */
    replyingTo: AuthorModel;
    /** Current reply text; the field is controlled. */
    text: string;
    onTextChange: (text: string) => void;
    onSend: () => void;
    /** Characters allowed; the counter turns red past it. */
    maxLength?: number;
    /** Controls drawn on the left of the send button. */
    children?: ReactNode;
}
export declare function ReplyComposer({ replyingTo, text, onTextChange, onSend, maxLength, children, }: ReplyComposerProps): import("react").JSX.Element;
