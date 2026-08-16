export interface GalleryStatusChipProps {
    /** Current gallery state; picks the dot colour. */
    state: "online" | "idle" | "offline" | "error";
    /** Text shown after the dot. */
    label: string;
    /** Controls the dot and text size. */
    size?: "sm" | "md" | "lg";
}
export declare function GalleryStatusChip({ state, label, size }: GalleryStatusChipProps): import("react").JSX.Element;
