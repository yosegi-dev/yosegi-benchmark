import type { Density, Visibility } from "~/models";
export interface VisibilityPickerProps {
    /** The audience currently selected for the draft. */
    visibility: Visibility;
    /** Fired with the audience the user picked. */
    onVisibilityChange: (visibility: Visibility) => void;
    /** Controls the control height. */
    density?: Density;
}
export declare function VisibilityPicker({ visibility, onVisibilityChange, density, }: VisibilityPickerProps): import("react").JSX.Element;
