import type { ReactNode } from "react";
import type { Density } from "~/models";
export interface AppShellProps {
    /** Rendered across the full width above both columns. */
    header: ReactNode;
    /** The primary column. */
    main: ReactNode;
    /** The secondary column, to the right of `main`. */
    sidebar: ReactNode;
    /** Spacing scale applied to the shell's own padding and gaps. */
    density?: Density;
}
export declare function AppShell({ header, main, sidebar, density }: AppShellProps): import("react").JSX.Element;
