import type { ReactNode } from "react";
export interface ReportRowProps {
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
export declare function ReportRow({ title, description, leading, trailing, tone, onSelect, }: ReportRowProps): import("react").JSX.Element;
