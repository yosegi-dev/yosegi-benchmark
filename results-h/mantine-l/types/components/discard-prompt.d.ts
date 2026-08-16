export interface DiscardPromptProps {
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
export declare function DiscardPrompt({ title, description, confirmLabel, cancelLabel, destructive, onConfirm, onCancel, }: DiscardPromptProps): import("react").JSX.Element;
