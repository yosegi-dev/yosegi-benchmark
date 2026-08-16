import type { ReactNode } from "react";
export interface DraftToggleRowSetting {
    id: string;
    label: string;
    /** Explanation under the label. */
    hint?: string;
    enabled: boolean;
}
export interface DraftToggleRowProps {
    /** The setting this row edits. */
    setting: DraftToggleRowSetting;
    /** Fired with the setting id and the state it is moving to. */
    onChange: (id: string, enabled: boolean) => void;
    /** Drawn between the text and the switch. */
    trailing?: ReactNode;
    /** Tightens the vertical padding. */
    dense?: boolean;
}
export declare function DraftToggleRow({ setting, onChange, trailing, dense }: DraftToggleRowProps): import("react").JSX.Element;
