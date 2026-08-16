export interface ActionButtonGroupProps {
    /** The buttons to render, left to right. */
    actions: {
        id: string;
        label: string;
        count?: number;
    }[];
    size?: "sm" | "md";
    /** Fired with the id of the button that was clicked. */
    onAction: (id: string) => void;
    /** Stretches the buttons to fill the row. */
    fullWidth?: boolean;
}
export declare function ActionButtonGroup({ actions, size, onAction, fullWidth, }: ActionButtonGroupProps): import("react").JSX.Element;
