import { Field, Input } from "@chakra-ui/react";

export interface PinFieldProps {
	/** Name of the pin input. */
	label: string;
	/** Current text; the input is fully controlled. */
	value: string;
	/** Rendered under the input in muted text. */
	helper?: string;
	/** Replaces the helper text and turns the field red. */
	error?: string;
	/** Marks the field required and shows the indicator. */
	required?: boolean;
	/** Fired with the next text on every keystroke. */
	onValueChange: (value: string) => void;
}

export function PinField({ label, value, helper, error, required = false, onValueChange }: PinFieldProps) {
	return (
		<Field.Root required={required} invalid={error !== undefined}>
			<Field.Label>
				{label}
				<Field.RequiredIndicator />
			</Field.Label>
			<Input
				value={value}
				size="sm"
				onChange={(event) => onValueChange(event.currentTarget.value)}
			/>
			{error === undefined ? (
				helper ? <Field.HelperText>{helper}</Field.HelperText> : null
			) : (
				<Field.ErrorText>{error}</Field.ErrorText>
			)}
		</Field.Root>
	);
}
