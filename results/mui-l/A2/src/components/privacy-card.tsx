import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";

export interface PrivacyCardProps {
	/** Card title. */
	title: string;
	/** Supporting copy under the title. */
	description?: string;
	/** Palette the card leans on. */
	tone?: "neutral" | "brand" | "warning";
	/** Labels drawn under the description. */
	tags?: string[];
	/** Drawn above the title, e.g. an image or a chart. */
	media?: ReactNode;
	/** Drawn at the bottom edge. */
	footer?: ReactNode;
	onOpen?: () => void;
}

const BORDERS = { neutral: "divider", brand: "primary.main", warning: "warning.main" };

export function PrivacyCard({ title, description, tone = "neutral", tags, media, footer, onOpen }: PrivacyCardProps) {
	const body = (
		<>
			{media}
			<CardContent>
				<Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
					{title}
				</Typography>
				{description ? (
					<Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
						{description}
					</Typography>
				) : null}
				{tags && tags.length > 0 ? (
					<Stack direction="row" spacing={0.75} sx={{ mt: 1, flexWrap: "wrap", gap: 0.75 }}>
						{tags.map((tag) => (
							<Chip key={tag} label={tag} size="small" variant="outlined" />
						))}
					</Stack>
				) : null}
			</CardContent>
		</>
	);

	return (
		<Card variant="outlined" sx={{ borderRadius: 3, borderColor: BORDERS[tone] }}>
			{onOpen ? <CardActionArea onClick={onOpen}>{body}</CardActionArea> : body}
			{footer}
		</Card>
	);
}
