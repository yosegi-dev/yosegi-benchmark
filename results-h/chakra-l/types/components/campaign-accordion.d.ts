export interface CampaignAccordionProps {
    /** The campaign sections, in display order. */
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
export declare function CampaignAccordion({ sections, defaultOpenId, collapsible }: CampaignAccordionProps): import("react").JSX.Element;
