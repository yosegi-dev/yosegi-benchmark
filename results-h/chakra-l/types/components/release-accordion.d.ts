export interface ReleaseAccordionProps {
    /** The release sections, in display order. */
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
export declare function ReleaseAccordion({ sections, defaultOpenId, collapsible }: ReleaseAccordionProps): import("react").JSX.Element;
