import type { ReactNode } from "react";
export interface BookmarkDisclosureProps {
    /** Label of the trigger that reveals the bookmark detail. */
    title: string;
    /** Revealed when the disclosure is open. */
    children: ReactNode;
    /** Starts the disclosure open. */
    defaultOpen?: boolean;
}
export declare function BookmarkDisclosure({ title, children, defaultOpen }: BookmarkDisclosureProps): import("react").JSX.Element;
