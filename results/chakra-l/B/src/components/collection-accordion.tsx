import { Accordion, Text } from "@chakra-ui/react";

export interface CollectionAccordionProps {
	/** The collection sections, in display order. */
	sections: { id: string; title: string; body: string }[];
	/** Id of the section that starts open. */
	defaultOpenId?: string;
	/** Allows every section to be closed at once. */
	collapsible?: boolean;
}

export function CollectionAccordion({ sections, defaultOpenId, collapsible = true }: CollectionAccordionProps) {
	return (
		<Accordion.Root
			collapsible={collapsible}
			variant="outline"
			defaultValue={defaultOpenId ? [defaultOpenId] : []}
		>
			{sections.map((section) => (
				<Accordion.Item key={section.id} value={section.id}>
					<Accordion.ItemTrigger>
						<Text flex="1" textAlign="start" fontWeight="medium">
							{section.title}
						</Text>
						<Accordion.ItemIndicator />
					</Accordion.ItemTrigger>
					<Accordion.ItemContent>
						<Accordion.ItemBody>{section.body}</Accordion.ItemBody>
					</Accordion.ItemContent>
				</Accordion.Item>
			))}
		</Accordion.Root>
	);
}
