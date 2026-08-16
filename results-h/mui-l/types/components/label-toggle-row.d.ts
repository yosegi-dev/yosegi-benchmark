import type { ReactNode } from "react";
export interface LabelToggleRowSetting {
    id: string;
    label: string;
    /** Explanation under the label. */
    hint?: string;
    enabled: boolean;
}
export interface LabelToggleRowProps {
    /** The setting this row edits. */
    setting: LabelToggleRowSetting;
    /** Fired with the setting id and the state it is moving to. */
    onChange: (id: string, enabled: boolean) => void;
    /** Drawn between the text and the switch. */
    trailing?: ReactNode;
    /** Tightens the vertical padding. */
    dense?: boolean;
}
export declare function LabelToggleRow({ setting, onChange, trailing, dense }: LabelToggleRowProps): import("react").JSX.Element;
