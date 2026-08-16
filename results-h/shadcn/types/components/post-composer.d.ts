import type { ReactNode } from "react";
import type { AuthorModel, Visibility } from "~/models";
export interface PostComposerProps {
    /** The signed-in user, shown alongside the input. */
    viewer: AuthorModel;
    /** The current text of the post being written. */
    draft: string;
    /** The audience the draft will be posted to; drives the hint under the input. */
    visibility: Visibility;
    /** Slot for the audience control. */
    visibilityPicker: ReactNode;
    /** Called with the next draft text on every keystroke. */
    onDraftChange: (draft: string) => void;
    /** Called when the submit button is pressed. */
    onSubmitPress: () => void;
    /** Text of the submit button. */
    submitLabel?: string;
}
export declare function PostComposer({ viewer, draft, visibility, visibilityPicker, onDraftChange, onSubmitPress, submitLabel, }: PostComposerProps): import("react").JSX.Element;
