import type { Density, Visibility } from "~/models";
export interface VisibilityPickerProps {
    /** The currently selected audience. */
    visibility: Visibility;
    /** Fired with the audience the user picked. */
    onVisibilityChange: (visibility: Visibility) => void;
    /** Control size. */
    density?: Density;
}
export declare function VisibilityPicker({ visibility, onVisibilityChange, density, }: VisibilityPickerProps): import("react").JSX.Element;
