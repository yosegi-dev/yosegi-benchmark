export interface RecoveryBreadcrumbProps {
    /** The ancestor recovery links, outermost first. */
    path: {
        href: string;
        label: string;
    }[];
    /** Label of the page being viewed; rendered as the last, unlinked crumb. */
    current: string;
    /** Controls the text size. */
    size?: "sm" | "md" | "lg";
}
export declare function RecoveryBreadcrumb({ path, current, size }: RecoveryBreadcrumbProps): import("react").JSX.Element;
