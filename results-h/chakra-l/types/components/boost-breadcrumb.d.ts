export interface BoostBreadcrumbProps {
    /** The ancestor boost links, outermost first. */
    path: {
        href: string;
        label: string;
    }[];
    /** Label of the page being viewed; rendered as the last, unlinked crumb. */
    current: string;
    /** Controls the text size. */
    size?: "sm" | "md" | "lg";
}
export declare function BoostBreadcrumb({ path, current, size }: BoostBreadcrumbProps): import("react").JSX.Element;
