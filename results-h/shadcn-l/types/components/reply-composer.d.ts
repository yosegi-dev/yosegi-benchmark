import type { AuthorModel } from "~/models";
export interface ReplyComposerProps {
    /** The author being replied to; shown as the "Replying to @handle" line. */
    replyingTo: AuthorModel;
    value: string;
    onChange: (value: string) => void;
    onSend: () => void;
    sendLabel?: string;
}
export declare function ReplyComposer({ replyingTo, value, onChange, onSend, sendLabel, }: ReplyComposerProps): import("react").JSX.Element;
