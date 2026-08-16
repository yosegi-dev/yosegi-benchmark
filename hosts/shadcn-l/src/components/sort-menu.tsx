import { cn } from "~/lib/utils";
import { Separator } from "~/ui/separator";

export interface SortMenuItem {
	id: string;
	label: string;
	/** Renders the item in red and moves it under a rule. */
	destructive?: boolean;
	disabled?: boolean;
}

export interface SortMenuProps {
	items: SortMenuItem[];
	onSelect: (id: string) => void;
	/** Which edge the menu is anchored to. */
	align?: "left" | "right";
}

export function SortMenu({ items, onSelect, align = "left" }: SortMenuProps) {
	const safe = items.filter((item) => !item.destructive);
	const destructive = items.filter((item) => item.destructive);

	return (
		<div
			role="menu"
			className={cn(
				"min-w-[180px] rounded-md border bg-popover py-1 shadow-md",
				align === "right" ? "text-right" : "text-left",
			)}
		>
			{safe.map((item) => (
				<button
					key={item.id}
					type="button"
					role="menuitem"
					disabled={item.disabled}
					className="w-full px-3 py-1.5 text-sm hover:bg-accent disabled:opacity-50"
					onClick={() => onSelect(item.id)}
				>
					{item.label}
				</button>
			))}
			{destructive.length > 0 ? <Separator className="my-1" /> : null}
			{destructive.map((item) => (
				<button
					key={item.id}
					type="button"
					role="menuitem"
					disabled={item.disabled}
					className="w-full px-3 py-1.5 text-sm text-destructive hover:bg-accent disabled:opacity-50"
					onClick={() => onSelect(item.id)}
				>
					{item.label}
				</button>
			))}
		</div>
	);
}
