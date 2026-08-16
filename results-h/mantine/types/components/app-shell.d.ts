import type { ReactNode } from "react";
import type { Density } from "~/models";
export interface AppShellProps {
    /** Slot pinned to the top of the viewport. */
    header: ReactNode;
    /** Slot for the primary column. */
    main: ReactNode;
    /** Slot for the right-hand column. */
    sidebar: ReactNode;
    /** Spacing scale for the whole page. */
    density?: Density;
}
export declare function AppShell({ header, main, sidebar, density }: AppShellProps): import("react").JSX.Element;
