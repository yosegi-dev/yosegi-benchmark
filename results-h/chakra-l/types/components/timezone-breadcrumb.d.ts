export interface TimezoneBreadcrumbProps {
    /** The ancestor timezone links, outermost first. */
    path: {
        href: string;
        label: string;
    }[];
    /** Label of the page being viewed; rendered as the last, unlinked crumb. */
    current: string;
    /** Controls the text size. */
    size?: "sm" | "md" | "lg";
}
export declare function TimezoneBreadcrumb({ path, current, size }: TimezoneBreadcrumbProps): import("react").JSX.Element;
