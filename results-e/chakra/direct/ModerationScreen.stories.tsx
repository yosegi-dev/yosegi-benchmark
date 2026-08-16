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
	id: "u-rin",
	displayName: "Rin Amano",
	handle: "rin",
	avatarUrl: "https://i.pravatar.cc/96?img=47",
	verified: true,
};

const kai: AuthorModel = {
	id: "u-kai",
	displayName: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://i.pravatar.cc/96?img=12",
};

const mio: AuthorModel = {
	id: "u-mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://i.pravatar.cc/96?img=32",
};

const postRin: PostModel = {
	id: "p-1",
	author: rin,
	body: "Shipping the new moderation queue today. Reports now land in one place instead of three separate inboxes.",
	createdAt: "2h",
	visibility: "public",
	replyCount: 12,
	repostCount: 4,
	likeCount: 38,
	likedByViewer: false,
};

const postKai: PostModel = {
	id: "p-2",
	author: kai,
	body: "This is the part everyone underestimates: the queue is only useful if the triage rules are written down.",
	createdAt: "5h",
	visibility: "followers",
	replyCount: 3,
	repostCount: 1,
	likeCount: 9,
	likedByViewer: false,
};

const postMio: PostModel = {
	id: "p-3",
	author: mio,
	body: "Two screenshots from the review tooling audit. Left is the old flow, right is the one we are testing.",
	createdAt: "1d",
	visibility: "unlisted",
	replyCount: 7,
	repostCount: 2,
	likeCount: 21,
	likedByViewer: false,
};

const mioImages = [
	{ url: "https://placehold.co/640x640/png?text=Old+flow", alt: "The previous review flow" },
	{ url: "https://placehold.co/640x640/png?text=New+flow", alt: "The flow currently under test" },
];

const trends: TrendModel[] = [
	{ id: "t-1", label: "#typescript", postCount: 8320 },
	{ id: "t-2", label: "#storybook", postCount: 6120 },
	{ id: "t-3", label: "#designsystems", postCount: 3980 },
];

const meta: Meta<typeof AppShell> = {
	title: "Screens/Moderation review",
	component: AppShell,
	parameters: {
		layout: "fullscreen",
	},
};

export default meta;

type Story = StoryObj<typeof AppShell>;

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
					quoted={
						<QuotedPost post={postRin} avatar={<UserAvatar author={rin} density="compact" />} />
					}
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
					media={<PostMedia images={mioImages} />}
					actions={<div>Reported 5 times</div>}
				/>
			</>
		),
		sidebar: (
			<TrendPanel
				heading="Review queue trends"
				items={
					<>
						{trends.map((trend, index) => (
							<TrendItem key={trend.id} rank={index + 1} trend={trend} />
						))}
					</>
				}
			/>
		),
	},
};
