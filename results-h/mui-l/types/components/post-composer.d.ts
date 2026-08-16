import type { ReactNode } from "react";
import type { AuthorModel, Visibility } from "~/models";
export interface PostComposerProps {
    /** The signed-in user, shown beside the input. */
    viewer: AuthorModel;
    /** Current text of the post being written; the input is controlled. */
    draft: string;
    /** Audience the draft will be published to. */
    visibility: Visibility;
    /** Slot for the control that changes `visibility`. */
    visibilityPicker: ReactNode;
    onDraftChange: (draft: string) => void;
    onSubmitPress: () => void;
    /** Text on the submit button. */
    submitLabel?: string;
}
export declare function PostComposer({ viewer, draft, visibility, visibilityPicker, onDraftChange, onSubmitPress, submitLabel, }: PostComposerProps): import("react").JSX.Element;
