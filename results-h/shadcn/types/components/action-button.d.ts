import type { ActionTone, Density } from "~/models";
export interface ActionButtonProps {
    /** Which post action this is; selects the icon and the hover colour. */
    tone: ActionTone;
    /** Accessible name for the action, e.g. `"Reply"`. */
    label: string;
    /** Shown next to the icon; omitted entirely when absent. */
    count?: number;
    /** Whether the viewer has already performed this action. */
    active?: boolean;
    /** Spacing scale, which here selects the control height. */
    density?: Density;
    /** Called when the button is pressed. */
    onPress: () => void;
}
export declare function ActionButton({ tone, label, count, active, density, onPress, }: ActionButtonProps): import("react").JSX.Element;
