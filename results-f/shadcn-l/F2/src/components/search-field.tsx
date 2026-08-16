import { Search } from "lucide-react";

import { densityControl } from "~/lib/density";
import { cn } from "~/lib/utils";
import type { Density } from "~/models";
import { Input } from "~/ui/input";

export interface SearchFieldProps {
	/** The current query text. The field is fully controlled. */
	value: string;
	placeholder?: string;
	/** Spacing scale, which here selects the control height. */
	density?: Density;
	/** Called with the next query text on every keystroke. */
	onQueryChange: (value: string) => void;
}

export function SearchField({
	value,
	placeholder = "Search",
	density = "cozy",
	onQueryChange,
}: SearchFieldProps) {
	return (
		<div className="relative w-full">
			<Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
			<Input
				type="search"
				value={value}
				placeholder={placeholder}
				className={cn("rounded-full pl-9", densityControl[density])}
				onChange={(event) => onQueryChange(event.target.value)}
			/>
		</div>
	);
}
