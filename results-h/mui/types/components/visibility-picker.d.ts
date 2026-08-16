import type { Density, Visibility } from "~/models";
export interface VisibilityPickerProps {
    /** The audience currently selected. */
    visibility: Visibility;
    onVisibilityChange: (visibility: Visibility) => void;
    /** Drives the trigger height. */
    density?: Density;
}
export declare function VisibilityPicker({ visibility, onVisibilityChange, density }: VisibilityPickerProps): import("react").JSX.Element;
