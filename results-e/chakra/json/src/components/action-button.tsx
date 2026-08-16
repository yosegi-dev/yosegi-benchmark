import { Button, Icon, Span } from "@chakra-ui/react";
import type { ActionTone, Density } from "~/models";

const tonePalette = {
	reply: "blue",
	repost: "green",
	like: "pink",
	quiet: "gray",
} as const;

const buttonSize = {
	compact: "xs",
	cozy: "sm",
	roomy: "md",
} as const;

function ToneIcon({ tone }: { tone: ActionTone }) {
	if (tone === "reply") {
		return (
			<Icon viewBox="0 0 24 24" boxSize="4">
				<path
					d="M20 12a8 8 0 0 1-8 8H4l2.2-2.6A8 8 0 1 1 20 12Z"
					fill="none"
					stroke="currentColor"
					strokeWidth="1.8"
					strokeLinejoin="round"
				/>
			</Icon>
		);
	}
	if (tone === "repost") {
		return (
			<Icon viewBox="0 0 24 24" boxSize="4">
				<path
					d="M6 8h11l-3-3m3 3v6M18 16H7l3 3m-3-3v-6"
					fill="none"
					stroke="currentColor"
					strokeWidth="1.8"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</Icon>
		);
	}
	if (tone === "like") {
		return (
			<Icon viewBox="0 0 24 24" boxSize="4">
				<path
					d="M12 20s-7-4.4-7-9a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 4.6-7 9-7 9Z"
					fill="none"
					stroke="currentColor"
					strokeWidth="1.8"
					strokeLinejoin="round"
				/>
			</Icon>
		);
	}
	return (
		<Icon viewBox="0 0 24 24" boxSize="4">
			<path
				d="M12 5v14m-7-7h14"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.8"
				strokeLinecap="round"
			/>
		</Icon>
	);
}

export interface ActionButtonProps {
	/** Picks the icon and the colour palette. */
	tone: ActionTone;
	/** Accessible name of the button; never rendered as visible text. */
	label: string;
	/** Shown next to the icon when present. */
	count?: number;
	/** Renders the button in its engaged state (liked, reposted). */
	active?: boolean;
	/** Controls the button height. */
	density?: Density;
	/** Fired when the button is activated. */
	onPress: () => void;
}

export function ActionButton({
	tone,
	label,
	count,
	active = false,
	density = "cozy",
	onPress,
}: ActionButtonProps) {
	return (
		<Button
			aria-label={label}
			aria-pressed={active}
			size={buttonSize[density]}
			variant={active ? "subtle" : "ghost"}
			colorPalette={tonePalette[tone]}
			color={active ? "colorPalette.fg" : "fg.muted"}
			borderRadius="full"
			gap="1.5"
			px="2"
			onClick={onPress}
		>
			<ToneIcon tone={tone} />
			{count === undefined ? null : (
				<Span fontVariantNumeric="tabular-nums" fontSize="xs">
					{count}
				</Span>
			)}
		</Button>
	);
}
