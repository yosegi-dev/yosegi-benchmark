import { Breadcrumb } from "@chakra-ui/react";

export interface FollowingBreadcrumbProps {
	/** The ancestor following links, outermost first. */
	path: { href: string; label: string }[];
	/** Label of the page being viewed; rendered as the last, unlinked crumb. */
	current: string;
	/** Controls the text size. */
	size?: "sm" | "md" | "lg";
}

export function FollowingBreadcrumb({ path, current, size = "md" }: FollowingBreadcrumbProps) {
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
