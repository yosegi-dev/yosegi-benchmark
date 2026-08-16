export interface WelcomeStatusChipProps {
    /** Current welcome state; picks the dot colour. */
    state: "online" | "idle" | "offline" | "error";
    /** Text shown after the dot. */
    label: string;
    /** Controls the dot and text size. */
    size?: "sm" | "md" | "lg";
}
export declare function WelcomeStatusChip({ state, label, size }: WelcomeStatusChipProps): import("react").JSX.Element;
