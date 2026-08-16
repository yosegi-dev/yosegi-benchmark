import type { ReactNode } from "react";
export interface CircleToggleRowSetting {
    id: string;
    label: string;
    /** Explanation under the label. */
    hint?: string;
    enabled: boolean;
}
export interface CircleToggleRowProps {
    /** The setting this row edits. */
    setting: CircleToggleRowSetting;
    /** Fired with the setting id and the state it is moving to. */
    onChange: (id: string, enabled: boolean) => void;
    /** Drawn between the text and the switch. */
    trailing?: ReactNode;
    /** Tightens the vertical padding. */
    dense?: boolean;
}
export declare function CircleToggleRow({ setting, onChange, trailing, dense }: CircleToggleRowProps): import("react").JSX.Element;
