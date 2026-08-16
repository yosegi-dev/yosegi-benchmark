import type { ReactNode } from "react";
export interface PollToggleRowSetting {
    id: string;
    label: string;
    /** Explanation under the label. */
    hint?: string;
    enabled: boolean;
}
export interface PollToggleRowProps {
    /** The setting this row edits. */
    setting: PollToggleRowSetting;
    /** Fired with the setting id and the state it is moving to. */
    onChange: (id: string, enabled: boolean) => void;
    /** Drawn between the text and the switch. */
    trailing?: ReactNode;
    /** Tightens the vertical padding. */
    dense?: boolean;
}
export declare function PollToggleRow({ setting, onChange, trailing, dense }: PollToggleRowProps): import("react").JSX.Element;
