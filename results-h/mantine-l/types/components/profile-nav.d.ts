export interface ProfileNavDestination {
    id: string;
    label: string;
    /** Shown as a pill on the right of the row. */
    badge?: number;
}
export interface ProfileNavProps {
    destinations: ProfileNavDestination[];
    /** Id of the destination currently open. */
    activeId: string;
    onNavigate: (id: string) => void;
}
export declare function ProfileNav({ destinations, activeId, onNavigate }: ProfileNavProps): import("react").JSX.Element;
