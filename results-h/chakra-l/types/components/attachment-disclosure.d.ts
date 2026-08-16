import type { ReactNode } from "react";
export interface AttachmentDisclosureProps {
    /** Label of the trigger that reveals the attachment detail. */
    title: string;
    /** Revealed when the disclosure is open. */
    children: ReactNode;
    /** Starts the disclosure open. */
    defaultOpen?: boolean;
}
export declare function AttachmentDisclosure({ title, children, defaultOpen }: AttachmentDisclosureProps): import("react").JSX.Element;
