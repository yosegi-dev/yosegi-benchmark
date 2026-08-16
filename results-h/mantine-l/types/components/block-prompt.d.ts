export interface BlockPromptProps {
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
export declare function BlockPrompt({ title, description, confirmLabel, cancelLabel, destructive, onConfirm, onCancel, }: BlockPromptProps): import("react").JSX.Element;
