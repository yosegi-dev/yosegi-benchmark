export interface PluginStatusChipProps {
    /** Current plugin state; picks the dot colour. */
    state: "online" | "idle" | "offline" | "error";
    /** Text shown after the dot. */
    label: string;
    /** Controls the dot and text size. */
    size?: "sm" | "md" | "lg";
}
export declare function PluginStatusChip({ state, label, size }: PluginStatusChipProps): import("react").JSX.Element;
