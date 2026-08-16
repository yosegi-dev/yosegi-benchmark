import type { ReactNode } from "react";
export interface InsightToggleRowSetting {
    id: string;
    label: string;
    /** Explanation under the label. */
    hint?: string;
    enabled: boolean;
}
export interface InsightToggleRowProps {
    /** The setting this row edits. */
    setting: InsightToggleRowSetting;
    /** Fired with the setting id and the state it is moving to. */
    onChange: (id: string, enabled: boolean) => void;
    /** Drawn between the text and the switch. */
    trailing?: ReactNode;
    /** Tightens the vertical padding. */
    dense?: boolean;
}
export declare function InsightToggleRow({ setting, onChange, trailing, dense }: InsightToggleRowProps): import("react").JSX.Element;
