import { Avatar, Button, HStack, Input } from "@chakra-ui/react";

const fieldSize = {
	sm: "sm",
	md: "md",
	lg: "lg",
} as const;

export interface PostComposerCompactProps {
	/** The draft text; the field is fully controlled. */
	value: string;
	/** Absolute URL of the signed-in user's avatar. */
	avatarUrl: string;
	/** Shown in the empty field. */
	placeholder?: string;
	/** Controls the field height. */
	size?: "sm" | "md" | "lg";
	/** Fired with the next draft text on every keystroke. */
	onChange: (value: string) => void;
	/** Fired when the submit button is activated. */
	onSubmit: () => void;
}

export function PostComposerCompact({
	value,
	avatarUrl,
	placeholder = "Post a quick update",
	size = "md",
	onChange,
	onSubmit,
}: PostComposerCompactProps) {
	return (
		<HStack gap="2" bg="bg" borderWidth="1px" borderRadius="l3" px="3" py="2">
			<Avatar.Root size="xs" variant="subtle" colorPalette="gray">
				<Avatar.Fallback />
				<Avatar.Image src={avatarUrl} alt="" />
			</Avatar.Root>
			<Input
				value={value}
				placeholder={placeholder}
				size={fieldSize[size]}
				variant="flushed"
				onChange={(event) => onChange(event.currentTarget.value)}
			/>
			<Button
				size={fieldSize[size]}
				variant="solid"
				colorPalette="blue"
				borderRadius="full"
				disabled={value.trim().length === 0}
				onClick={onSubmit}
			>
				Post
			</Button>
		</HStack>
	);
}
