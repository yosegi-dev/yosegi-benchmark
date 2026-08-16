import type { ReactNode } from "react";
export interface SearchHeaderProps {
    title: string;
    /** Line under the title. */
    subtitle?: string;
    /** Image shown to the left of the title. */
    avatarUrl?: string;
    /** Slot for controls on the right. */
    actions?: ReactNode;
    /** Pins the header while its section scrolls. */
    sticky?: boolean;
}
export declare function SearchHeader({ title, subtitle, avatarUrl, actions, sticky }: SearchHeaderProps): import("react").JSX.Element;
