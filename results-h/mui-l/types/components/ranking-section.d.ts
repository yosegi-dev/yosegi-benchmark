import type { ReactNode } from "react";
export interface RankingSectionProps {
    /** Section title. */
    heading: ReactNode;
    /** Section contents. */
    children: ReactNode;
    /** Copy under the heading. */
    description?: string;
    /** Draws a rule under the heading. */
    divided?: boolean;
}
export declare function RankingSection({ heading, children, description, divided }: RankingSectionProps): import("react").JSX.Element;
