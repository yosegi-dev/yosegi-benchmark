export interface ExploreNavDestination {
    id: string;
    label: string;
    /** Shown as a pill on the right of the row. */
    badge?: number;
}
export interface ExploreNavProps {
    destinations: ExploreNavDestination[];
    /** Id of the destination currently open. */
    activeId: string;
    onNavigate: (id: string) => void;
}
export declare function ExploreNav({ destinations, activeId, onNavigate }: ExploreNavProps): import("react").JSX.Element;
