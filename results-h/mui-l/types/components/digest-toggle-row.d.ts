import type { ReactNode } from "react";
export interface DigestToggleRowSetting {
    id: string;
    label: string;
    /** Explanation under the label. */
    hint?: string;
    enabled: boolean;
}
export interface DigestToggleRowProps {
    /** The setting this row edits. */
    setting: DigestToggleRowSetting;
    /** Fired with the setting id and the state it is moving to. */
    onChange: (id: string, enabled: boolean) => void;
    /** Drawn between the text and the switch. */
    trailing?: ReactNode;
    /** Tightens the vertical padding. */
    dense?: boolean;
}
export declare function DigestToggleRow({ setting, onChange, trailing, dense }: DigestToggleRowProps): import("react").JSX.Element;
