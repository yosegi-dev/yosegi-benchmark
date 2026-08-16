import type { ReactNode } from "react";
export interface HighlightToggleRowSetting {
    id: string;
    label: string;
    /** Explanation under the label. */
    hint?: string;
    enabled: boolean;
}
export interface HighlightToggleRowProps {
    /** The setting this row edits. */
    setting: HighlightToggleRowSetting;
    /** Fired with the setting id and the state it is moving to. */
    onChange: (id: string, enabled: boolean) => void;
    /** Drawn between the text and the switch. */
    trailing?: ReactNode;
    /** Tightens the vertical padding. */
    dense?: boolean;
}
export declare function HighlightToggleRow({ setting, onChange, trailing, dense }: HighlightToggleRowProps): import("react").JSX.Element;
