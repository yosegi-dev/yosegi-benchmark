export interface ExploreBreadcrumbProps {
    /** The ancestor explore links, outermost first. */
    path: {
        href: string;
        label: string;
    }[];
    /** Label of the page being viewed; rendered as the last, unlinked crumb. */
    current: string;
    /** Controls the text size. */
    size?: "sm" | "md" | "lg";
}
export declare function ExploreBreadcrumb({ path, current, size }: ExploreBreadcrumbProps): import("react").JSX.Element;
