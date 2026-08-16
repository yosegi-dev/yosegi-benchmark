import type { ReactNode } from "react";
export interface InviteToggleRowSetting {
    id: string;
    label: string;
    /** Explanation under the label. */
    hint?: string;
    enabled: boolean;
}
export interface InviteToggleRowProps {
    /** The setting this row edits. */
    setting: InviteToggleRowSetting;
    /** Fired with the setting id and the state it is moving to. */
    onChange: (id: string, enabled: boolean) => void;
    /** Drawn between the text and the switch. */
    trailing?: ReactNode;
    /** Tightens the vertical padding. */
    dense?: boolean;
}
export declare function InviteToggleRow({ setting, onChange, trailing, dense }: InviteToggleRowProps): import("react").JSX.Element;
