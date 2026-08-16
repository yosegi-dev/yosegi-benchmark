export interface ProfileAccordionProps {
    /** The profile sections, in display order. */
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
export declare function ProfileAccordion({ sections, defaultOpenId, collapsible }: ProfileAccordionProps): import("react").JSX.Element;
