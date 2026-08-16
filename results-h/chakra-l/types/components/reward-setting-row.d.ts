import type { ReactNode } from "react";
export interface RewardSettingRowProps {
    /** Name of the reward setting. */
    label: string;
    /** One line explaining what turning it on does. */
    description?: string;
    /** Current state of the switch. */
    enabled: boolean;
    /** Fired with the state the switch is moving to. */
    onToggle: (enabled: boolean) => void;
    /** Rendered next to the label — a "new" tag, a plan requirement, and the like. */
    badge?: ReactNode;
}
export declare function RewardSettingRow({ label, description, enabled, onToggle, badge }: RewardSettingRowProps): import("react").JSX.Element;
