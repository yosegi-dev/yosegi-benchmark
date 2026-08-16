import type { ReactNode } from "react";
export interface HashtagToggleRowSetting {
    id: string;
    label: string;
    /** Explanation under the label. */
    hint?: string;
    enabled: boolean;
}
export interface HashtagToggleRowProps {
    /** The setting this row edits. */
    setting: HashtagToggleRowSetting;
    /** Fired with the setting id and the state it is moving to. */
    onChange: (id: string, enabled: boolean) => void;
    /** Drawn between the text and the switch. */
    trailing?: ReactNode;
    /** Tightens the vertical padding. */
    dense?: boolean;
}
export declare function HashtagToggleRow({ setting, onChange, trailing, dense }: HashtagToggleRowProps): import("react").JSX.Element;
