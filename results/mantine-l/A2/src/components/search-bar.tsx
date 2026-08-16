import { Box, Paper, Stack, Text, TextInput, UnstyledButton } from "@mantine/core";
import type { ReactNode } from "react";

export interface SearchBarProps {
	/** Current query text. */
	query: string;
	/** Fired on every keystroke with the next query. */
	onQuery: (query: string) => void;
	/** Fired when Enter is pressed. */
	onSubmit?: () => void;
	/** Completions shown under the field. */
	suggestions?: string[];
	/** Controls placed to the right of the field. */
	children?: ReactNode;
}

export function SearchBar({ query, onQuery, onSubmit, suggestions = [], children }: SearchBarProps) {
	return (
		<Box pos="relative">
			<TextInput
				type="search"
				radius="xl"
				value={query}
				placeholder="Search Yosegi"
				rightSection={children}
				rightSectionWidth={children === undefined ? 0 : 80}
				onChange={(event) => onQuery(event.currentTarget.value)}
				onKeyDown={(event) => {
					if (event.key === "Enter" && onSubmit !== undefined) {
						onSubmit();
					}
				}}
			/>
			{suggestions.length === 0 ? null : (
				<Paper withBorder radius="md" p="xs" mt={4} pos="absolute" left={0} right={0} style={{ zIndex: 200 }}>
					<Stack gap={2}>
						{suggestions.map((suggestion) => (
							<UnstyledButton key={suggestion} onClick={() => onQuery(suggestion)}>
								<Text size="sm">{suggestion}</Text>
							</UnstyledButton>
						))}
					</Stack>
				</Paper>
			)}
		</Box>
	);
}
