export interface ExportAccordionProps {
    /** The export sections, in display order. */
    sections: {
        id: string;
        title: string;
        body: string;
    }[];
    /** Id of the section that starts open. */
    defaultOpenId?: string;
    /** Allows every section to be closed at once. */
    collapsible?: boolean;
}
export declare function ExportAccordion({ sections, defaultOpenId, collapsible }: ExportAccordionProps): import("react").JSX.Element;
