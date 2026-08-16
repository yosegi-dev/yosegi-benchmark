import type { ReactNode } from "react";
export interface DiscoveryDisclosureProps {
    /** Label of the trigger that reveals the discovery detail. */
    title: string;
    /** Revealed when the disclosure is open. */
    children: ReactNode;
    /** Starts the disclosure open. */
    defaultOpen?: boolean;
}
export declare function DiscoveryDisclosure({ title, children, defaultOpen }: DiscoveryDisclosureProps): import("react").JSX.Element;
