import type { ActionTone, Density } from "~/models";
export interface ActionButtonProps {
    /** Which timeline action this is; picks the icon and the palette. */
    tone: ActionTone;
    /** Accessible name for the control, e.g. "Reply". */
    label: string;
    /** Shown next to the icon; omit to render the icon alone. */
    count?: number;
    /** True when the viewer has already performed this action. */
    active?: boolean;
    /** Drives the control height. */
    density?: Density;
    onPress: () => void;
}
export declare function ActionButton({ tone, label, count, active, density, onPress }: ActionButtonProps): import("react").JSX.Element;
