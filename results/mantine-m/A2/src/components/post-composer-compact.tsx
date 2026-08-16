import { Button, Group, TextInput } from "@mantine/core";

export interface PostComposerCompactProps {
	/** Current text. */
	value: string;
	onChange: (value: string) => void;
	onSubmit: () => void;
	placeholder?: string;
	size?: "sm" | "md";
}

export function PostComposerCompact({
	value,
	onChange,
	onSubmit,
	placeholder = "Write something",
	size = "sm",
}: PostComposerCompactProps) {
	return (
		<Group gap="xs" wrap="nowrap">
			<TextInput
				flex={1}
				size={size}
				radius="xl"
				value={value}
				placeholder={placeholder}
				onChange={(event) => onChange(event.currentTarget.value)}
			/>
			<Button size={size} radius="xl" disabled={value.trim().length === 0} onClick={onSubmit}>
				Post
			</Button>
		</Group>
	);
}
