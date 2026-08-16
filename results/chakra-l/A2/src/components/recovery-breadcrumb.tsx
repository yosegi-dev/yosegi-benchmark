import { Breadcrumb } from "@chakra-ui/react";

export interface RecoveryBreadcrumbProps {
	/** The ancestor recovery links, outermost first. */
	path: { href: string; label: string }[];
	/** Label of the page being viewed; rendered as the last, unlinked crumb. */
	current: string;
	/** Controls the text size. */
	size?: "sm" | "md" | "lg";
}

export function RecoveryBreadcrumb({ path, current, size = "md" }: RecoveryBreadcrumbProps) {
	return (
		<Breadcrumb.Root size={size}>
			<Breadcrumb.List>
				{path.map((crumb) => (
					<Breadcrumb.Item key={crumb.href}>
						<Breadcrumb.Link href={crumb.href}>{crumb.label}</Breadcrumb.Link>
						<Breadcrumb.Separator />
					</Breadcrumb.Item>
				))}
				<Breadcrumb.Item>
					<Breadcrumb.CurrentLink>{current}</Breadcrumb.CurrentLink>
				</Breadcrumb.Item>
			</Breadcrumb.List>
		</Breadcrumb.Root>
	);
}
