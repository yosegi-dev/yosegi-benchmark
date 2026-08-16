import type { ReactNode } from "react";
import type { Density } from "~/models";
export interface AppShellProps {
    /** Rendered above both columns, pinned to the top of the viewport. */
    header: ReactNode;
    /** The primary column. */
    main: ReactNode;
    /** The secondary column, shown to the right of `main` on wide viewports. */
    sidebar: ReactNode;
    /** Spacing scale applied to the whole page. */
    density?: Density;
}
export declare function AppShell({ header, main, sidebar, density }: AppShellProps): import("react").JSX.Element;
