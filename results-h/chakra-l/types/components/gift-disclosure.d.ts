import type { ReactNode } from "react";
export interface GiftDisclosureProps {
    /** Label of the trigger that reveals the gift detail. */
    title: string;
    /** Revealed when the disclosure is open. */
    children: ReactNode;
    /** Starts the disclosure open. */
    defaultOpen?: boolean;
}
export declare function GiftDisclosure({ title, children, defaultOpen }: GiftDisclosureProps): import("react").JSX.Element;
