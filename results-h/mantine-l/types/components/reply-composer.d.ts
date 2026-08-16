import type { ReactNode } from "react";
export interface ReplyComposerProps {
    /** Handle of the account being replied to, without the "@". */
    replyingTo: string;
    /** Current reply text. */
    text: string;
    onTextChange: (text: string) => void;
    onSend: () => void;
    /** Extra controls placed left of the send button. */
    children?: ReactNode;
}
export declare function ReplyComposer({ replyingTo, text, onTextChange, onSend, children, }: ReplyComposerProps): import("react").JSX.Element;
