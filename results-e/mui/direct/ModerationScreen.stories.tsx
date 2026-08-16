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
	handle: "@rin",
	avatarUrl: "https://i.pravatar.cc/128?img=15",
	verified: true,
};

const kai: AuthorModel = {
	id: "author-kai",
	displayName: "Kai Doi",
	handle: "@kai",
	avatarUrl: "https://i.pravatar.cc/128?img=33",
};

const mio: AuthorModel = {
	id: "author-mio",
	displayName: "Mio Sato",
	handle: "@mio",
	avatarUrl: "https://i.pravatar.cc/128?img=47",
};

const postOne: PostModel = {
	id: "post-1",
	author: rin,
	body: "Shipping the new moderation queue today. Reports now land in one place instead of three.",
	createdAt: "2024-05-21T09:00:00.000Z",
	visibility: "public",
	replyCount: 12,
	repostCount: 4,
	likeCount: 38,
	likedByViewer: false,
};

const postTwo: PostModel = {
	id: "post-2",
	author: kai,
	body: "This is the part I keep having to explain to people. Bookmarking it for the next review round.",
	createdAt: "2024-05-21T06:00:00.000Z",
	visibility: "followers",
	replyCount: 3,
	repostCount: 1,
	likeCount: 9,
	likedByViewer: false,
};

const postThree: PostModel = {
	id: "post-3",
	author: mio,
	body: "Two screenshots from the audit pass. The second one is the state nobody had seen before.",
	createdAt: "2024-05-20T11:00:00.000Z",
	visibility: "unlisted",
	replyCount: 7,
	repostCount: 2,
	likeCount: 21,
	likedByViewer: false,
};

const postThreeImages: { url: string; alt: string }[] = [
	{ url: "https://picsum.photos/seed/moderation-a/640/480", alt: "Audit pass, first screenshot" },
	{ url: "https://picsum.photos/seed/moderation-b/640/480", alt: "Audit pass, second screenshot" },
];

const trends: TrendModel[] = [
	{ id: "trend-typescript", label: "#typescript", postCount: 8320 },
	{ id: "trend-storybook", label: "#storybook", postCount: 6120 },
	{ id: "trend-designsystems", label: "#designsystems", postCount: 3980 },
];

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
			<div style={{ display: "grid", gap: 16 }}>
				<PostCard
					post={postOne}
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
					post={postTwo}
					authorLine={
						<PostAuthorLine
							author={kai}
							label="5h"
							visibility="followers"
							avatar={<UserAvatar author={kai} />}
						/>
					}
					quoted={<QuotedPost post={postOne} avatar={<UserAvatar author={rin} density="compact" />} />}
					actions={<div>Reported once</div>}
				/>
				<PostCard
					post={postThree}
					authorLine={
						<PostAuthorLine
							author={mio}
							label="1d"
							visibility="unlisted"
							avatar={<UserAvatar author={mio} />}
						/>
					}
					media={<PostMedia images={postThreeImages} />}
					actions={<div>Reported 5 times</div>}
				/>
			</div>
		),
		sidebar: (
			<TrendPanel
				heading="Review queue trends"
				items={
					<>
						<TrendItem rank={1} trend={trends[0]} />
						<TrendItem rank={2} trend={trends[1]} />
						<TrendItem rank={3} trend={trends[2]} />
					</>
				}
			/>
		),
	},
};
