import type { ReactNode } from "react";
export interface ReactionToggleRowSetting {
    id: string;
    label: string;
    /** Explanation under the label. */
    hint?: string;
    enabled: boolean;
}
export interface ReactionToggleRowProps {
    /** The setting this row edits. */
    setting: ReactionToggleRowSetting;
    /** Fired with the setting id and the state it is moving to. */
    onChange: (id: string, enabled: boolean) => void;
    /** Drawn between the text and the switch. */
    trailing?: ReactNode;
    /** Tightens the vertical padding. */
    dense?: boolean;
}
export declare function ReactionToggleRow({ setting, onChange, trailing, dense }: ReactionToggleRowProps): import("react").JSX.Element;
