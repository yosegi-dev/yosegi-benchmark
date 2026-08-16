import type { ReactNode } from "react";
import type { AuthorModel, Visibility } from "~/models";
export interface PostComposerProps {
    /** The signed-in user, whose avatar sits beside the field. */
    viewer: AuthorModel;
    /** Current text of the post being written. */
    draft: string;
    /** Audience the draft will be posted to. */
    visibility: Visibility;
    /** Slot for the control that changes the audience. */
    visibilityPicker: ReactNode;
    /** Fired on every keystroke with the next draft text. */
    onDraftChange: (draft: string) => void;
    /** Fired when the submit button is activated. */
    onSubmitPress: () => void;
    /** Text of the submit button. */
    submitLabel?: string;
}
export declare function PostComposer({ viewer, draft, visibility, visibilityPicker, onDraftChange, onSubmitPress, submitLabel, }: PostComposerProps): import("react").JSX.Element;
