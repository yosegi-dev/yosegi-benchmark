import type { ReactNode } from "react";
export interface MuteToggleRowSetting {
    id: string;
    label: string;
    /** Explanation under the label. */
    hint?: string;
    enabled: boolean;
}
export interface MuteToggleRowProps {
    /** The setting this row edits. */
    setting: MuteToggleRowSetting;
    /** Fired with the setting id and the state it is moving to. */
    onChange: (id: string, enabled: boolean) => void;
    /** Drawn between the text and the switch. */
    trailing?: ReactNode;
    /** Tightens the vertical padding. */
    dense?: boolean;
}
export declare function MuteToggleRow({ setting, onChange, trailing, dense }: MuteToggleRowProps): import("react").JSX.Element;
