export interface ReportPromptProps {
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
export declare function ReportPrompt({ title, description, confirmLabel, cancelLabel, destructive, onConfirm, onCancel, }: ReportPromptProps): import("react").JSX.Element;
