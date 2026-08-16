export interface DeviceListEntry {
    id: string;
    primary: string;
    secondary?: string;
}
export interface DeviceListProps {
    entries: DeviceListEntry[];
    /** Shown in place of the list when it is empty. */
    emptyLabel?: string;
    /** Draws a rule between entries. */
    dividers?: boolean;
    onEntrySelect?: (id: string) => void;
}
export declare function DeviceList({ entries, emptyLabel, dividers, onEntrySelect, }: DeviceListProps): import("react").JSX.Element;
