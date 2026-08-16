import type { ReactNode } from "react";
export interface AudienceDisclosureProps {
    /** Label of the trigger that reveals the audience detail. */
    title: string;
    /** Revealed when the disclosure is open. */
    children: ReactNode;
    /** Starts the disclosure open. */
    defaultOpen?: boolean;
}
export declare function AudienceDisclosure({ title, children, defaultOpen }: AudienceDisclosureProps): import("react").JSX.Element;
