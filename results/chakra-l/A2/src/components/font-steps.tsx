import { Steps } from "@chakra-ui/react";
import type { ReactNode } from "react";

export interface FontStepsProps {
	/** The font steps, in order. */
	steps: { id: string; title: string; description?: string }[];
	/** Zero-based position of the step being worked on. */
	current: number;
	/** Rendered under the step list. */
	content?: ReactNode;
	/** Controls the indicator size. */
	size?: "sm" | "md" | "lg";
}

export function FontSteps({ steps, current, content, size = "md" }: FontStepsProps) {
	return (
		<Steps.Root count={steps.length} step={current} size={size}>
			<Steps.List>
				{steps.map((step, index) => (
					<Steps.Item key={step.id} index={index}>
						<Steps.Trigger>
							<Steps.Indicator />
							<Steps.Title>{step.title}</Steps.Title>
						</Steps.Trigger>
						<Steps.Separator />
					</Steps.Item>
				))}
			</Steps.List>
			{content ? <Steps.Content index={current}>{content}</Steps.Content> : null}
		</Steps.Root>
	);
}
