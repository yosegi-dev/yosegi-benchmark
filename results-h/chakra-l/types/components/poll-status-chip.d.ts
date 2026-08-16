export interface PollStatusChipProps {
    /** Current poll state; picks the dot colour. */
    state: "online" | "idle" | "offline" | "error";
    /** Text shown after the dot. */
    label: string;
    /** Controls the dot and text size. */
    size?: "sm" | "md" | "lg";
}
export declare function PollStatusChip({ state, label, size }: PollStatusChipProps): import("react").JSX.Element;
