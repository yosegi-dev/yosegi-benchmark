import type { ReactNode } from "react";
export interface DeviceRowProps {
    title: string;
    /** Secondary line under the title. */
    description?: string;
    /** Replaces the default icon at the start of the row. */
    leading?: ReactNode;
    /** Rendered at the far right, e.g. a switch or an overflow button. */
    trailing?: ReactNode;
    tone?: "neutral" | "info" | "warning" | "danger";
    onSelect?: () => void;
}
export declare function DeviceRow({ title, description, leading, trailing, tone, onSelect, }: DeviceRowProps): import("react").JSX.Element;
