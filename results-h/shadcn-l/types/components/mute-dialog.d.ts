export interface MuteDialogProps {
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
export declare function MuteDialog({ open, title, description, confirmLabel, destructive, onConfirm, onCancel, }: MuteDialogProps): import("react").JSX.Element | null;
