import type { ActionTone, Density } from "~/models";
export interface ActionButtonProps {
    /** Picks the icon and the colour palette. */
    tone: ActionTone;
    /** Accessible name of the button; never rendered as visible text. */
    label: string;
    /** Shown next to the icon when present. */
    count?: number;
    /** Renders the button in its engaged state (liked, reposted). */
    active?: boolean;
    /** Controls the button height. */
    density?: Density;
    /** Fired when the button is activated. */
    onPress: () => void;
}
export declare function ActionButton({ tone, label, count, active, density, onPress, }: ActionButtonProps): import("react").JSX.Element;
