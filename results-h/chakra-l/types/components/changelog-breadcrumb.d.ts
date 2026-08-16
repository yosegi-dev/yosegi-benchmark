export interface ChangelogBreadcrumbProps {
    /** The ancestor changelog links, outermost first. */
    path: {
        href: string;
        label: string;
    }[];
    /** Label of the page being viewed; rendered as the last, unlinked crumb. */
    current: string;
    /** Controls the text size. */
    size?: "sm" | "md" | "lg";
}
export declare function ChangelogBreadcrumb({ path, current, size }: ChangelogBreadcrumbProps): import("react").JSX.Element;
