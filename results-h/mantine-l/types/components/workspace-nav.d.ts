export interface WorkspaceNavDestination {
    id: string;
    label: string;
    /** Shown as a pill on the right of the row. */
    badge?: number;
}
export interface WorkspaceNavProps {
    destinations: WorkspaceNavDestination[];
    /** Id of the destination currently open. */
    activeId: string;
    onNavigate: (id: string) => void;
}
export declare function WorkspaceNav({ destinations, activeId, onNavigate }: WorkspaceNavProps): import("react").JSX.Element;
