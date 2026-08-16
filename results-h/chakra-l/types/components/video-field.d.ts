export interface VideoFieldProps {
    /** Name of the video input. */
    label: string;
    /** Current text; the input is fully controlled. */
    value: string;
    /** Rendered under the input in muted text. */
    helper?: string;
    /** Replaces the helper text and turns the field red. */
    error?: string;
    /** Marks the field required and shows the indicator. */
    required?: boolean;
    /** Fired with the next text on every keystroke. */
    onValueChange: (value: string) => void;
}
export declare function VideoField({ label, value, helper, error, required, onValueChange }: VideoFieldProps): import("react").JSX.Element;
