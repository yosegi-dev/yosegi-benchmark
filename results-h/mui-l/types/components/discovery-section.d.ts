import type { ReactNode } from "react";
export interface DiscoverySectionProps {
    /** Section title. */
    heading: ReactNode;
    /** Section contents. */
    children: ReactNode;
    /** Copy under the heading. */
    description?: string;
    /** Draws a rule under the heading. */
    divided?: boolean;
}
export declare function DiscoverySection({ heading, children, description, divided }: DiscoverySectionProps): import("react").JSX.Element;
