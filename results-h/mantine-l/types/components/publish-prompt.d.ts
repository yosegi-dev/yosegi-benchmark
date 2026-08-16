export interface PublishPromptProps {
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
export declare function PublishPrompt({ title, description, confirmLabel, cancelLabel, destructive, onConfirm, onCancel, }: PublishPromptProps): import("react").JSX.Element;
