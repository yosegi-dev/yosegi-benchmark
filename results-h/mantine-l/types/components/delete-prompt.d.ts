export interface DeletePromptProps {
    title: string;
    /** Sentence explaining the consequence. */
    description?: string;
    confirmLabel?: string;
    cancelLabel?: string;
    /** Colours the confirm button red. */
    destructive?: boolean;
    onConfirm: () => void;
    onCancel: () => void;
}
export declare function DeletePrompt({ title, description, confirmLabel, cancelLabel, destructive, onConfirm, onCancel, }: DeletePromptProps): import("react").JSX.Element;
