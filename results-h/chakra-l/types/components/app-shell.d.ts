import type { ReactNode } from "react";
import type { Density } from "~/models";
export interface AppShellProps {
    /** Rendered above the columns, sticky to the top of the viewport. */
    header: ReactNode;
    /** The primary column: feed tabs, composer, post cards. */
    main: ReactNode;
    /** The right-hand column: trends and suggestions. */
    sidebar: ReactNode;
    /** Controls the page gutter and the gap between the two columns. */
    density?: Density;
}
export declare function AppShell({ header, main, sidebar, density }: AppShellProps): import("react").JSX.Element;
