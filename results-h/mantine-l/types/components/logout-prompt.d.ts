export interface LogoutPromptProps {
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
export declare function LogoutPrompt({ title, description, confirmLabel, cancelLabel, destructive, onConfirm, onCancel, }: LogoutPromptProps): import("react").JSX.Element;
