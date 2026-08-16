export interface BillingAccordionProps {
    /** The billing sections, in display order. */
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
export declare function BillingAccordion({ sections, defaultOpenId, collapsible }: BillingAccordionProps): import("react").JSX.Element;
