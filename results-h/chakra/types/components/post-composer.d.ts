import type { ReactNode } from "react";
import type { AuthorModel, Visibility } from "~/models";
export interface PostComposerProps {
    /** The signed-in user, shown beside the draft. */
    viewer: AuthorModel;
    /** The draft text; the textarea is fully controlled. */
    draft: string;
    /** The audience the draft will be posted to. */
    visibility: Visibility;
    /** Slot for the visibility picker. */
    visibilityPicker: ReactNode;
    /** Fired with the next draft text on every keystroke. */
    onDraftChange: (draft: string) => void;
    /** Fired when the submit button is activated. */
    onSubmitPress: () => void;
    /** Label of the submit button. */
    submitLabel?: string;
}
export declare function PostComposer({ viewer, draft, visibility, visibilityPicker, onDraftChange, onSubmitPress, submitLabel, }: PostComposerProps): import("react").JSX.Element;
