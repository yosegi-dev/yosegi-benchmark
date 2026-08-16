import type { Meta, StoryObj } from "@storybook/react";
import { AppShell } from "~/components/app-shell";
import { PostAuthorLine } from "~/components/post-author-line";
import { PostCard } from "~/components/post-card";
import { PostMedia } from "~/components/post-media";
import { QuotedPost } from "~/components/quoted-post";
import { TrendItem } from "~/components/trend-item";
import { TrendPanel } from "~/components/trend-panel";
import { UserAvatar } from "~/components/user-avatar";
import type { AuthorModel, PostModel, TrendModel } from "~/models";

const rin: AuthorModel = {
	id: "author-rin",
	displayName: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://i.pravatar.cc/160?img=47",
	verified: true,
};

const kai: AuthorModel = {
	id: "author-kai",
	displayName: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://i.pravatar.cc/160?img=12",
};

const mio: AuthorModel = {
	id: "author-mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://i.pravatar.cc/160?img=32",
};

const postRin: PostModel = {
	id: "post-1",
	author: rin,
	body: "Reminder that a design system is a contract, not a folder of components. If the contract is not written down, every team writes their own.",
	createdAt: "2026-08-13T07:40:00.000Z",
	visibility: "public",
	replyCount: 12,
	repostCount: 34,
	likeCount: 210,
	likedByViewer: false,
};

const postKai: PostModel = {
	id: "post-2",
	author: kai,
	body: "This is the part people skip. Writing the contract down is the whole job.",
	createdAt: "2026-08-13T04:35:00.000Z",
	visibility: "followers",
	replyCount: 4,
	repostCount: 9,
	likeCount: 63,
	likedByViewer: false,
};

const postMio: PostModel = {
	id: "post-3",
	author: mio,
	body: "Spent the day auditing our token usage across screens. Two screenshots of the before and after.",
	createdAt: "2026-08-12T09:15:00.000Z",
	visibility: "unlisted",
	replyCount: 7,
	repostCount: 15,
	likeCount: 88,
	likedByViewer: false,
};

const typescriptTrend: TrendModel = {
	id: "trend-typescript",
	label: "#typescript",
	postCount: 8320,
};

const storybookTrend: TrendModel = {
	id: "trend-storybook",
	label: "#storybook",
	postCount: 6120,
};

const designSystemsTrend: TrendModel = {
	id: "trend-designsystems",
	label: "#designsystems",
	postCount: 3980,
};

const meta = {
	title: "Screens/ModerationScreen",
	component: AppShell,
	parameters: {
		layout: "fullscreen",
	},
} satisfies Meta<typeof AppShell>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ModerationReview: Story = {
	args: {
		header: <h1>Moderation review</h1>,
		main: (
			<>
				<PostCard
					post={postRin}
					authorLine={
						<PostAuthorLine
							author={rin}
							label="2h"
							visibility="public"
							avatar={<UserAvatar author={rin} />}
						/>
					}
					actions={<div>Reported 3 times</div>}
				/>
				<PostCard
					post={postKai}
					authorLine={
						<PostAuthorLine
							author={kai}
							label="5h"
							visibility="followers"
							avatar={<UserAvatar author={kai} />}
						/>
					}
					quoted={<QuotedPost post={postRin} avatar={<UserAvatar author={rin} density="compact" />} />}
					actions={<div>Reported once</div>}
				/>
				<PostCard
					post={postMio}
					authorLine={
						<PostAuthorLine
							author={mio}
							label="1d"
							visibility="unlisted"
							avatar={<UserAvatar author={mio} />}
						/>
					}
					media={
						<PostMedia
							images={[
								{
									url: "https://placehold.co/600x400/png?text=Before",
									alt: "Token audit, before",
								},
								{
									url: "https://placehold.co/600x400/png?text=After",
									alt: "Token audit, after",
								},
							]}
						/>
					}
					actions={<div>Reported 5 times</div>}
				/>
			</>
		),
		sidebar: (
			<TrendPanel
				heading="Review queue trends"
				items={
					<>
						<TrendItem rank={1} trend={typescriptTrend} />
						<TrendItem rank={2} trend={storybookTrend} />
						<TrendItem rank={3} trend={designSystemsTrend} />
					</>
				}
			/>
		),
	},
};
