import type { Density, Visibility } from "~/models";
export interface VisibilityPickerProps {
    /** The audience currently selected. */
    visibility: Visibility;
    /** Called with the audience the user selected. */
    onVisibilityChange: (visibility: Visibility) => void;
    /** Spacing scale, which here selects the trigger height. */
    density?: Density;
}
export declare function VisibilityPicker({ visibility, onVisibilityChange, density, }: VisibilityPickerProps): import("react").JSX.Element;
