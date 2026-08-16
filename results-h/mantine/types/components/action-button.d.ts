import type { ActionTone, Density } from "~/models";
export interface ActionButtonProps {
    /** Which action this is; picks the colour. */
    tone: ActionTone;
    /** Visible text of the button. */
    label: string;
    /** Shown after the label, abbreviated (1234 becomes "1.2K"). */
    count?: number;
    /** Renders the button in its engaged state, e.g. an already-liked post. */
    active?: boolean;
    /** Control size. */
    density?: Density;
    /** Fired when the button is activated. */
    onPress: () => void;
}
export declare function ActionButton({ tone, label, count, active, density, onPress, }: ActionButtonProps): import("react").JSX.Element;
