export interface ArchiveDialogProps {
    open: boolean;
    title: string;
    /** Explains what confirming will do. */
    description?: string;
    /** Text of the confirming button. */
    confirmLabel?: string;
    /** Draws the confirming button in the destructive style. */
    destructive?: boolean;
    onConfirm: () => void;
    onCancel: () => void;
}
export declare function ArchiveDialog({ open, title, description, confirmLabel, destructive, onConfirm, onCancel, }: ArchiveDialogProps): import("react").JSX.Element | null;
