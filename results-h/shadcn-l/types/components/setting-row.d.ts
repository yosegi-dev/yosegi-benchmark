import type { ReactNode } from "react";
export interface SettingRowProps {
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
export declare function SettingRow({ title, description, leading, trailing, tone, onSelect, }: SettingRowProps): import("react").JSX.Element;
