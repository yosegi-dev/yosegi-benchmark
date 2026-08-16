import { Search } from "lucide-react";

import { cn } from "~/lib/utils";
import { Input } from "~/ui/input";

const sizeStyles = {
	sm: "h-7 text-xs",
	md: "h-9 text-sm",
	lg: "h-11 text-base",
};

export interface SearchFieldCompactProps {
	value: string;
	onChange: (value: string) => void;
	placeholder?: string;
	size?: "sm" | "md" | "lg";
	autoFocus?: boolean;
}

export function SearchFieldCompact({
	value,
	onChange,
	placeholder = "Search",
	size = "md",
	autoFocus = false,
}: SearchFieldCompactProps) {
	return (
		<div className="relative">
			<Search className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
			<Input
				type="search"
				value={value}
				placeholder={placeholder}
				autoFocus={autoFocus}
				className={cn("pl-8", sizeStyles[size])}
				onChange={(event) => onChange(event.target.value)}
			/>
		</div>
	);
}
