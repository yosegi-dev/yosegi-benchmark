export interface FollowingBreadcrumbProps {
    /** The ancestor following links, outermost first. */
    path: {
        href: string;
        label: string;
    }[];
    /** Label of the page being viewed; rendered as the last, unlinked crumb. */
    current: string;
    /** Controls the text size. */
    size?: "sm" | "md" | "lg";
}
export declare function FollowingBreadcrumb({ path, current, size }: FollowingBreadcrumbProps): import("react").JSX.Element;
