import type { ReactNode } from "react";
export interface PasswordBulletListProps {
    /** The password lines, in display order. */
    items: string[];
    /** Marker draws a bullet; plain leaves the line flush. */
    variant?: "marker" | "plain";
    /** Rendered under the list. */
    trailing?: ReactNode;
}
export declare function PasswordBulletList({ items, variant, trailing }: PasswordBulletListProps): import("react").JSX.Element;
