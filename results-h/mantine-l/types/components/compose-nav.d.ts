export interface ComposeNavDestination {
    id: string;
    label: string;
    /** Shown as a pill on the right of the row. */
    badge?: number;
}
export interface ComposeNavProps {
    destinations: ComposeNavDestination[];
    /** Id of the destination currently open. */
    activeId: string;
    onNavigate: (id: string) => void;
}
export declare function ComposeNav({ destinations, activeId, onNavigate }: ComposeNavProps): import("react").JSX.Element;
