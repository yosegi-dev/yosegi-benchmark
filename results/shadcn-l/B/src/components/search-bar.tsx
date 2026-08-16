import { Loader2, Search } from "lucide-react";
import type { ReactNode } from "react";

import { Button } from "~/ui/button";
import { Input } from "~/ui/input";

export interface SearchBarProps {
	/** The submitted query, not the in-progress input value. */
	query: string;
	/** Called when the user submits, not on every keystroke. */
	onSearch: (query: string) => void;
	/** Rendered as a dropdown under the field. */
	suggestions?: string[];
	loading?: boolean;
	/** Rendered to the right of the submit button, e.g. a filter control. */
	children?: ReactNode;
}

export function SearchBar({
	query,
	onSearch,
	suggestions = [],
	loading = false,
	children,
}: SearchBarProps) {
	return (
		<div className="relative w-full">
			<form
				className="flex items-center gap-2"
				onSubmit={(event) => {
					event.preventDefault();
					const field = event.currentTarget.elements.namedItem("q");
					if (field instanceof HTMLInputElement) {
						onSearch(field.value);
					}
				}}
			>
				<Input name="q" type="search" defaultValue={query} placeholder="Search posts" />
				<Button type="submit" size="icon" aria-label="Search">
					{loading ? (
						<Loader2 className="h-4 w-4 animate-spin" />
					) : (
						<Search className="h-4 w-4" />
					)}
				</Button>
				{children}
			</form>
			{suggestions.length > 0 ? (
				<ul className="absolute inset-x-0 top-full z-20 mt-1 rounded-md border bg-popover py-1 shadow-md">
					{suggestions.map((suggestion) => (
						<li key={suggestion}>
							<button
								type="button"
								className="w-full px-3 py-1.5 text-left text-sm hover:bg-accent"
								onClick={() => onSearch(suggestion)}
							>
								{suggestion}
							</button>
						</li>
					))}
				</ul>
			) : null}
		</div>
	);
}
