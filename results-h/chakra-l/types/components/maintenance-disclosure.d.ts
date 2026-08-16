import type { ReactNode } from "react";
export interface MaintenanceDisclosureProps {
    /** Label of the trigger that reveals the maintenance detail. */
    title: string;
    /** Revealed when the disclosure is open. */
    children: ReactNode;
    /** Starts the disclosure open. */
    defaultOpen?: boolean;
}
export declare function MaintenanceDisclosure({ title, children, defaultOpen }: MaintenanceDisclosureProps): import("react").JSX.Element;
