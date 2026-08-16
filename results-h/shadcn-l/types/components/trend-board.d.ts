import type { TrendModel } from "~/models";
export interface TrendBoardSection {
    id: string;
    title: string;
    trends: TrendModel[];
}
export interface TrendBoardProps {
    /** Grid columns; the board wraps below that. */
    columns?: number;
    sections: TrendBoardSection[];
    /** Receives the id of the trend that was chosen. */
    onSelect?: (id: string) => void;
}
export declare function TrendBoard({ columns, sections, onSelect }: TrendBoardProps): import("react").JSX.Element;
